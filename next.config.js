const path = require('path');

// Pin the bare `react` / `react-dom` specifiers to the single installed copy so
// some deploy sandboxes can't load a second React instance (which makes
// framer-motion's hooks read a null dispatcher and crashes prerendering with
// "Cannot read properties of null (reading 'useContext')"). The trailing `$`
// means EXACT match only, so subpaths such as `react-dom/server` resolve
// normally and stay intact.
const reactDir = path.dirname(require.resolve('react/package.json'));
const reactDomDir = path.dirname(require.resolve('react-dom/package.json'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react$: reactDir,
      'react-dom$': reactDomDir,
    };
    return config;
  },
};

module.exports = nextConfig;
