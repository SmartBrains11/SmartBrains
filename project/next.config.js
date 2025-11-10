/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds, not dev server
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
