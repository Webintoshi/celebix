/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  
  async headers() {
    return [
      ...['/checkout/saas/:path*', '/api/platform-checkout/:path*', '/api/platform-payments/:path*'].map(source => ({
        source,
        headers: [
          { key: 'Cache-Control', value: 'private, no-store, max-age=0' },
          // Native POST navigation needs its same-site Origin for CSRF checks.
          // Cross-site navigation still sends no checkout referrer.
          { key: 'Referrer-Policy', value: source.startsWith('/checkout/') ? 'same-origin' : 'no-referrer' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none'; form-action 'self' https://cpp.iyzipay.com https://sandbox-cpp.iyzipay.com; base-uri 'none'; object-src 'none'" },
        ],
      })),
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
