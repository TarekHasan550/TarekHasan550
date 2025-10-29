import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'softwaresindemand.com',
      'thewritelife.com',
      'i.pinimg.com',
      'luxurylifestylemag.co.uk',
      'fitnessfastindia.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
