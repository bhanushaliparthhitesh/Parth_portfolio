import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['172.16.0.2'],
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: '/grid',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/studies',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/list',
        destination: '/coming-soon',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
