const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, 'out');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function resolveFile(pathname) {
  let rel = decodeURIComponent(pathname);
  if (rel.endsWith('/')) rel += 'index.html';

  const candidates = [rel, `${rel}.html`, path.join(rel, 'index.html')];
  for (const candidate of candidates) {
    const abs = path.join(ROOT, candidate);
    if (!abs.startsWith(ROOT)) continue;
    try {
      const stat = fs.statSync(abs);
      if (stat.isFile()) return abs;
    } catch {
    }
  }
  return null;
}

const server = http.createServer((req, res) => {
  let pathname = '/';
  try {
    pathname = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;
  } catch {
    pathname = req.url.split('?')[0] || '/';
  }
  if (pathname === '/') pathname = '/index.html';

  const file = resolveFile(pathname);

  if (file) {
    res.writeHead(200, {
      'Content-Type': contentType(file),
      'Cache-Control': pathname.startsWith('/_next/static/')
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=0, must-revalidate',
    });
    fs.createReadStream(file).pipe(res);
    return;
  }

  const notFound = path.join(ROOT, '404.html');
  if (fs.existsSync(notFound)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(notFound).pipe(res);
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found');
});

server.listen(PORT, () => {
  console.log(`> Serving static export from ${ROOT} on port ${PORT}`);
});
