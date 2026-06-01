/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This app is entirely .js/.jsx. Restricting pageExtensions makes Next ignore
  // any stray .ts/.tsx files left behind by the GoDaddy "v8-app-template" Vite
  // scaffold (e.g. pages/index.tsx), which otherwise conflicts with app/page.js.
  pageExtensions: ['js', 'jsx'],
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
