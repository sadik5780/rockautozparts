// Zero-dependency static file server for the prebuilt Next.js export in ./out.
//
// Why this exists: GoDaddy's PaaS build environment injects Vite-based dev-tools
// that break Next's SSR/prerender, so we build locally (next build with
// output: 'export') and commit ./out, then serve those static files here.
// The platform only runs `npm start` (-> node server.js); it does not build.

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

// Resolve a request pathname to a file inside ROOT, or null if not found.
// Tries: exact file, then <path>.html, then <path>/index.html.
function resolveFile(pathname) {
  let rel = decodeURIComponent(pathname);
  if (rel.endsWith('/')) rel += 'index.html';

  // Prevent path traversal: resolve and ensure the result stays under ROOT.
  const candidates = [rel, `${rel}.html`, path.join(rel, 'index.html')];
  for (const candidate of candidates) {
    const abs = path.join(ROOT, candidate);
    if (!abs.startsWith(ROOT)) continue;
    try {
      const stat = fs.statSync(abs);
      if (stat.isFile()) return abs;
    } catch {
      // not found, try next candidate
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
      // Hashed Next assets are immutable; HTML should always be revalidated.
      'Cache-Control': pathname.startsWith('/_next/static/')
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=0, must-revalidate',
    });
    fs.createReadStream(file).pipe(res);
    return;
  }

  // Fallback to the exported 404 page.
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
