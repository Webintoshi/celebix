/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  
  async redirects() {
    return [
      // WWW yönlendirmesi - www -> non-www (Vercel'de çalışır)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.celebix.co',
          },
        ],
        destination: 'https://celebix.co/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
