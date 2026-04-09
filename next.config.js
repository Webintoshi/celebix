/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  
  // Trailing slash ayarı - 308 redirect'leri önlemek için
  trailingSlash: false,
  
  async redirects() {
    return [
      // WWW yönlendirmesi - www -> non-www
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
      
      // Locale olmayan URL'leri /tr/'ye yönlendir (301 Permanent)
      // Bu sayfalar için 307 yerine 301 kullan
      {
        source: '/e-ticaret-paketleri',
        destination: '/tr/e-ticaret-paketleri',
        permanent: true,
      },
      {
        source: '/celebix-saas-platformu',
        destination: '/tr/celebix-saas-platformu',
        permanent: true,
      },
      {
        source: '/sosyal-medya',
        destination: '/tr/sosyal-medya',
        permanent: true,
      },
      {
        source: '/dijital-pazarlama',
        destination: '/tr/dijital-pazarlama',
        permanent: true,
      },
      {
        source: '/kurumsal-yazilim',
        destination: '/tr/kurumsal-yazilim',
        permanent: true,
      },
      {
        source: '/portfoy',
        destination: '/tr/portfoy',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/tr/blog',
        permanent: true,
      },
      {
        source: '/iletisim',
        destination: '/tr/iletisim',
        permanent: true,
      },
      {
        source: '/hakkimizda',
        destination: '/tr/hakkimizda',
        permanent: true,
      },
      {
        source: '/gizlilik',
        destination: '/tr/gizlilik',
        permanent: true,
      },
      {
        source: '/kullanim-kosullari',
        destination: '/tr/kullanim-kosullari',
        permanent: true,
      },
      
      // Tailing slash düzeltmeleri - 308 -> 301
      {
        source: '/tr/',
        destination: '/tr',
        permanent: true,
      },
      {
        source: '/en/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
