/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'ruggedsa.co.za'],
  },
  webpack: (config) => {
    // This is needed for proper JSON imports
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
