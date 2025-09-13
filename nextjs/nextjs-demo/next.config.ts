import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Match all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL', // Allow iframe embedding
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors *", // Allow any origin to embed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
