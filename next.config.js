/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  
  // WWW yönlendirmesi
  async redirects() {
    return [
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
