/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
  
  async redirects() {
    return [
      // Legacy domain redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.celebix.co',
          },
        ],
        destination: 'https://celebix.net/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'celebix.co',
          },
        ],
        destination: 'https://celebix.net/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.celebix.net',
          },
        ],
        destination: 'https://celebix.net/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
