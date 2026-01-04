/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds, not dev server
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Enable image optimization for better performance
    unoptimized: process.env.NODE_ENV === 'production' && process.env.STATIC_EXPORT === 'true',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
    ],
  },
};

module.exports = nextConfig;
