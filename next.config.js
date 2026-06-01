/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;
