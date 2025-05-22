// ✅ next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  experimental: {
    swcMinify: false,
  },
};

module.exports = nextConfig;
