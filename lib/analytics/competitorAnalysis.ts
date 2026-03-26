/**
 * Competitor Intelligence & Analysis System
 * Celebix - Market Research & Gap Analysis
 */

export interface Competitor {
  name: string;
  domain: string;
  services: string[];
  seoMetrics: {
    domainAuthority: number;
    organicTraffic: number;
    topKeywords: string[];
  };
}

export const TURKEY_COMPETITORS: Competitor[] = [
  {
    name: "ETicaret.com.tr",
    domain: "eticaret.com.tr",
    services: ["E-ticaret paketleri", "Pazaryeri entegrasyonu"],
    seoMetrics: {
      domainAuthority: 55,
      organicTraffic: 15000,
      topKeywords: ["e-ticaret paketi", "sanal mağaza"],
    },
  },
  {
    name: "Ideasoft",
    domain: "ideasoft.com.tr",
    services: ["E-ticaret altyapısı", "Mobil uygulama"],
    seoMetrics: {
      domainAuthority: 58,
      organicTraffic: 20000,
      topKeywords: ["e-ticaret altyapısı", "eticaret çözümleri"],
    },
  },
  {
    name: "Ticimax",
    domain: "ticimax.com",
    services: ["E-ticaret paketleri", "Pazaryeri"],
    seoMetrics: {
      domainAuthority: 62,
      organicTraffic: 35000,
      topKeywords: ["ticimax", "e-ticaret sitesi"],
    },
  },
];

export interface ContentGap {
  topic: string;
  searchVolume: number;
  difficulty: number;
  opportunity: "high" | "medium" | "low";
}

export const CONTENT_GAPS: ContentGap[] = [
  { topic: "E-ticaret vergi rehberi", searchVolume: 1200, difficulty: 35, opportunity: "high" },
  { topic: "E-ticaret AI araçları", searchVolume: 1800, difficulty: 30, opportunity: "high" },
  { topic: "Kargo entegrasyonu rehberi", searchVolume: 800, difficulty: 40, opportunity: "medium" },
];

export const CELEBIX_SWOT = {
  strengths: [
    "Komisyonsuz e-ticaret farkı",
    "Yerel SEO güçlü",
    "AI destekli çözümler",
  ],
  weaknesses: [
    "Marka bilinirliği düşük",
    "Sınırlı backlink",
    "Az video içerik",
  ],
  opportunities: [
    "Yerel pazar büyümesi",
    "KOBİ dijital dönüşüm",
    "Video pazarlama trendi",
  ],
  threats: [
    "Büyük rakip pazar payı",
    "Fiyat rekabeti",
    "Ekonomik dalgalanma",
  ],
};
