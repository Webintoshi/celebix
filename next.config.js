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
      // Specific legacy SEO redirect
      {
        source: '/tr/blog/google-ads-2024-rehberi',
        destination: 'https://celebix.net/tr/blog/google-ads-butce-optimizasyonu-2026',
        statusCode: 301,
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
