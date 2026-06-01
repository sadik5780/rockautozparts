/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build to a fully static site in out/. GoDaddy's PaaS build environment
  // injects Vite dev-tools that break Next's SSR/prerender, so we build locally
  // and ship the static output, served by server.js. Every route here is static.
  output: 'export',
  // This app is entirely .js/.jsx. Restricting pageExtensions makes Next ignore
  // any stray .ts/.tsx files left behind by the GoDaddy "v8-app-template" Vite
  // scaffold (e.g. pages/index.tsx), which otherwise conflicts with app/page.js.
  pageExtensions: ['js', 'jsx'],
  // The GoDaddy platform injects its own .tsx dev-tools (e.g.
  // dev-tools/src/AiroErrorBoundary.tsx using Vite's import.meta.hot) that fail
  // Next's type/lint checks. This app has no TypeScript of its own, so don't let
  // those injected files fail the production build.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Static export has no image optimization server, so serve images as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;
