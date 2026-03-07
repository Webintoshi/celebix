import { Metadata } from "next";

// Domain configuration
export const siteConfig = {
  name: "Celebix",
  description: "AI destekli e-ticaret çözümleri, kurumsal yazılım ve dijital pazarlama hizmetleri",
  url: "https://celebix.co",
  ogImage: "https://celebix.co/images/og-image.jpg",
  twitter: "@celebix",
  email: "merhaba@celebix.co",
  phone: "+90 530 209 96 28",
  address: {
    city: "Altınordu",
    region: "Ordu",
    country: "TR"
  }
};

// Default metadata for all pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Celebix | Premium E-Ticaret ve Dijital Çözümler",
    template: "%s | Celebix"
  },
  description: siteConfig.description,
  keywords: [
    "e-ticaret",
    "dijital pazarlama",
    "kurumsal yazılım",
    "web tasarım",
    "mobil uygulama",
    "SEO",
    "sosyal medya yönetimi",
    "Google Ads",
    "Türkiye"
  ],
  authors: [{ name: "Celebix" }],
  creator: "Celebix",
  publisher: "Celebix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Celebix | Premium E-Ticaret ve Dijital Çözümler",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Celebix - Dijital Çözümler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebix | Premium E-Ticaret ve Dijital Çözümler",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "/",
    languages: {
      "tr": "/tr",
      "en": "/en",
    },
  },
  category: "technology",
};

// Page-specific metadata templates
export const pageMetadata = {
  // Ana Sayfa
  home: (locale: string): Metadata => ({
    title: locale === "tr" 
      ? "Celebix | AI Destekli E-Ticaret ve Dijital Çözümler"
      : "Celebix | AI-Powered E-Commerce & Digital Solutions",
    description: locale === "tr"
      ? "Celebix ile işletmenizi dijital dünyada büyütün. AI destekli e-ticaret, kurumsal yazılım, sosyal medya yönetimi ve profesyonel dijital pazarlama hizmetleri."
      : "Grow your business in the digital world with Celebix. AI-powered e-commerce, enterprise software, social media management, and professional digital marketing services.",
    keywords: locale === "tr" 
      ? ["e-ticaret", "dijital ajans", "yazılım şirketi", "web tasarım", "SEO", "sosyal medya"]
      : ["e-commerce", "digital agency", "software company", "web design", "SEO", "social media"],
    openGraph: {
      title: locale === "tr" 
        ? "Celebix | AI Destekli E-Ticaret ve Dijital Çözümler"
        : "Celebix | AI-Powered E-Commerce & Digital Solutions",
      description: locale === "tr"
        ? "Celebix ile işletmenizi dijital dünyada büyütün. AI destekli e-ticaret, kurumsal yazılım ve daha fazlası."
        : "Grow your business with Celebix. AI-powered e-commerce, enterprise software and more.",
    },
  }),

  // E-Ticaret
  ecommerce: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "Celebix E-Ticaret | Premium Online Satış Platformu"
      : "Celebix E-Commerce | Premium Online Sales Platform",
    description: locale === "tr"
      ? "19.000₺'den başlayan, AI destekli, sınırsız ürün kapasiteli premium e-ticaret platformu. Komisyon yok, sınırsız özellik!"
      : "Starting from 19,000₺, AI-powered, unlimited product capacity premium e-commerce platform. No commission, unlimited features!",
    keywords: locale === "tr"
      ? ["e-ticaret paketleri", "online satış", "e-ticaret sitesi", "sanal mağaza", "eticaret çözümleri", "komisyonsuz e-ticaret"]
      : ["e-commerce packages", "online sales", "e-commerce website", "virtual store", "e-commerce solutions"],
    alternates: {
      canonical: "/e-ticaret-paketleri",
    },
  }),

  // SaaS / Tık Profil
  saas: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "Tık Profil | 700₺/Ay Komisyonsuz E-Ticaret"
      : "Tık Profil | Commission-Free E-Commerce at 700₺/Month",
    description: locale === "tr"
      ? "68 farklı sektöre özel, 700₺/ay sabit ücretle komisyonsuz e-ticaret. Ücretsiz SMS, WhatsApp Business ve AI destekli yönetim paneli."
      : "Commission-free e-commerce for 68 different sectors at a fixed 700₺/month. Free SMS, WhatsApp Business and AI-powered admin panel.",
    keywords: locale === "tr"
      ? ["Tık Profil", "komisyonsuz e-ticaret", "ucuz e-ticaret", "hazır e-ticaret sitesi", "SaaS e-ticaret"]
      : ["Tık Profil", "commission-free e-commerce", "affordable e-commerce", "ready e-commerce site", "SaaS e-commerce"],
    alternates: {
      canonical: "/celebix-saas-platformu",
    },
  }),

  // Kurumsal Yazılım
  software: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "Kurumsal Yazılım Geliştirme | Celebix"
      : "Enterprise Software Development | Celebix",
    description: locale === "tr"
      ? "Özel kurumsal yazılım çözümleri, web ve mobil uygulama geliştirme. İşletmenize özel, ölçeklenebilir teknolojiler."
      : "Custom enterprise software solutions, web and mobile application development. Scalable technologies tailored to your business.",
    keywords: locale === "tr"
      ? ["kurumsal yazılım", "özel yazılım", "web uygulama", "mobil uygulama", "yazılım geliştirme", "ERP yazılımı"]
      : ["enterprise software", "custom software", "web application", "mobile application", "software development", "ERP software"],
    alternates: {
      canonical: "/kurumsal-yazilim",
    },
  }),

  // Dijital Pazarlama
  marketing: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "Dijital Pazarlama Hizmetleri | Celebix"
      : "Digital Marketing Services | Celebix",
    description: locale === "tr"
      ? "Google Ads, SEO, içerik pazarlaması ve performans pazarlama. Dijital dünyada görünür olun, satışlarınızı artırın."
      : "Google Ads, SEO, content marketing and performance marketing. Be visible in the digital world, increase your sales.",
    keywords: locale === "tr"
      ? ["dijital pazarlama", "Google Ads", "SEO", "arama motoru optimizasyonu", "performans pazarlama", "dijital reklam"]
      : ["digital marketing", "Google Ads", "SEO", "search engine optimization", "performance marketing", "digital advertising"],
    alternates: {
      canonical: "/dijital-pazarlama",
    },
  }),

  // Sosyal Medya
  socialMedia: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "Sosyal Medya Yönetimi | Celebix"
      : "Social Media Management | Celebix",
    description: locale === "tr"
      ? "Profesyonel sosyal medya yönetimi, içerik üretimi ve topluluk yönetimi. Instagram, Facebook, LinkedIn ve X (Twitter) için stratejiler."
      : "Professional social media management, content creation and community management. Strategies for Instagram, Facebook, LinkedIn and X (Twitter).",
    keywords: locale === "tr"
      ? ["sosyal medya yönetimi", "içerik üretimi", "sosyal medya ajansı", "Instagram yönetimi", "LinkedIn pazarlama"]
      : ["social media management", "content creation", "social media agency", "Instagram management", "LinkedIn marketing"],
    alternates: {
      canonical: "/sosyal-medya",
    },
  }),

  // Portfolyo
  portfolio: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "Portfolyo | Celebix Projeleri"
      : "Portfolio | Celebix Projects",
    description: locale === "tr"
      ? "Celebix'in tamamladığı projeler, müşteri referansları ve başarı hikayeleri. E-ticaret, yazılım ve dijital pazarlama çalışmalarımız."
      : "Projects completed by Celebix, client references and success stories. Our e-commerce, software and digital marketing work.",
    keywords: locale === "tr"
      ? ["Celebix portfolyo", "referanslar", "projeler", "e-ticaret örnekleri", "yazılım projeleri"]
      : ["Celebix portfolio", "references", "projects", "e-commerce examples", "software projects"],
    alternates: {
      canonical: "/portfoy",
    },
  }),

  // Hakkımızda
  about: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "Hakkımızda | Celebix Ekibi ve Değerlerimiz"
      : "About Us | Celebix Team and Values",
    description: locale === "tr"
      ? "Celebix'in hikayesi, ekibi ve değerleri. Ordu'dan Türkiye'ye, dijital dönüşümün öncüsü."
      : "Celebix's story, team and values. From Ordu to Turkey, the pioneer of digital transformation.",
    keywords: locale === "tr"
      ? ["Celebix hakkında", "ekip", "vizyon", "misyon", "dijital ajans Ordu"]
      : ["about Celebix", "team", "vision", "mission", "digital agency Ordu"],
    alternates: {
      canonical: "/hakkimizda",
    },
  }),

  // İletişim
  contact: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "İletişim | Celebix ile Projenizi Konuşun"
      : "Contact | Discuss Your Project with Celebix",
    description: locale === "tr"
      ? "Celebix ile iletişime geçin. E-ticaret, yazılım veya dijital pazarlama projeleriniz için ücretsiz danışmanlık."
      : "Contact Celebix. Free consultation for your e-commerce, software or digital marketing projects.",
    keywords: locale === "tr"
      ? ["Celebix iletişim", "teklif al", "dijital ajans iletişim", "yazılım şirketi iletişim"]
      : ["Celebix contact", "get quote", "digital agency contact", "software company contact"],
    alternates: {
      canonical: "/iletisim",
    },
  }),

  // Blog
  blog: (locale: string): Metadata => ({
    title: locale === "tr"
      ? "Blog | Dijital Dünya ve E-Ticaret Rehberi"
      : "Blog | Digital World and E-Commerce Guide",
    description: locale === "tr"
      ? "E-ticaret, dijital pazarlama, SEO ve yazılım dünyasından güncel haberler, ipuçları ve uzman görüşleri."
      : "Current news, tips and expert opinions from the world of e-commerce, digital marketing, SEO and software.",
    keywords: locale === "tr"
      ? ["e-ticaret blog", "dijital pazarlama blog", "SEO ipuçları", "yazılım geliştirme", "teknoloji haberleri"]
      : ["e-commerce blog", "digital marketing blog", "SEO tips", "software development", "tech news"],
    alternates: {
      canonical: "/blog",
    },
  }),

  // Blog Post
  blogPost: (locale: string, post: { title: string; description: string; slug: string; tags: string[] }): Metadata => ({
    title: `${post.title} | Celebix Blog`,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  }),
};

// Helper to merge metadata
export function mergeMetadata(
  base: Metadata,
  override: Metadata
): Metadata {
  return {
    ...base,
    ...override,
    openGraph: {
      ...base.openGraph,
      ...override.openGraph,
    },
    twitter: {
      ...base.twitter,
      ...override.twitter,
    },
    alternates: {
      ...base.alternates,
      ...override.alternates,
    },
  };
}
