import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr 
      ? "Video Pazarlama 2026 | YouTube SEO ve Sosyal Video Rehberi"
      : "Video Marketing 2026 | YouTube SEO & Social Video Guide",
    description: isTr
      ? "2026 video pazarlama stratejileri. YouTube SEO, TikTok, Instagram Reels için içerik üretimi. KOBİ'ler için adım adım video pazarlama rehberi."
      : "2026 video marketing strategies. YouTube SEO, TikTok, Instagram Reels content creation. Step-by-step video marketing guide for SMEs.",
    keywords: isTr
      ? ["video pazarlama", "YouTube SEO", "TikTok marketing", "Instagram Reels", "video içerik", "sosyal video", "video stratejisi 2026"]
      : ["video marketing", "YouTube SEO", "TikTok marketing", "Instagram Reels", "video content", "social video", "video strategy 2026"],
    alternates: {
      canonical: `/${locale}/video-pazarlama-2026`,
      languages: {
        tr: "/tr/video-pazarlama-2026",
        en: "/en/video-marketing-2026",
      },
    },
    openGraph: {
      title: isTr 
        ? "Video Pazarlama 2026 | Celebix"
        : "Video Marketing 2026 | Celebix",
      description: isTr
        ? "2026 video pazarlama stratejileri. YouTube SEO, TikTok, Reels rehberi."
        : "2026 video marketing strategies. YouTube SEO, TikTok, Reels guide.",
      url: `https://celebix.co/${locale}/video-pazarlama-2026`,
      type: "article",
      images: [
        {
          url: "https://celebix.co/og-video-marketing.webp",
          width: 1200,
          height: 630,
          alt: isTr ? "Video Pazarlama 2026 - Celebix" : "Video Marketing 2026 - Celebix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isTr ? "Video Pazarlama 2026 | Celebix" : "Video Marketing 2026 | Celebix",
      description: isTr
        ? "2026 video pazarlama stratejileri ve rehberi!"
        : "2026 video marketing strategies and guide!",
      images: ["https://celebix.co/og-video-marketing.webp"],
    },
  };
}

export default function VideoMarketingLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "Video Pazarlama 2026" : "Video Marketing 2026", url: `/${locale}/video-pazarlama-2026` },
  ];

  const faqData = [
    {
      question: isTr ? "Video pazarlama ne kadara mal olur?" : "How much does video marketing cost?",
      answer: isTr 
        ? "Başlangıç için akıllı telefon ve ücretsiz yazılımlar yeterli. Orta seviye ekipman 15.000-25.000 TL. Profesyonel üretim 50.000 TL+."
        : "Smartphone and free software are sufficient to start. Mid-level equipment 15,000-25,000 TL. Professional production 50,000 TL+.",
    },
    {
      question: isTr ? "Hangi platformda başlamalıyım?" : "Which platform should I start with?",
      answer: isTr
        ? "Hedef kitlenize göre: B2C için TikTok/Instagram, B2B için LinkedIn/YouTube, Genel için YouTube önerilir."
        : "Depending on your audience: TikTok/Instagram for B2C, LinkedIn/YouTube for B2B, YouTube for general purpose.",
    },
    {
      question: isTr ? "Ne sıklıkla video paylaşmalıyım?" : "How often should I post videos?",
      answer: isTr
        ? "YouTube: Haftada 1-2, Instagram Reels: Günde 1, TikTok: Günde 1-3, LinkedIn: Haftada 2-3. Düzenlilik önemli!"
        : "YouTube: 1-2 per week, Instagram Reels: 1 per day, TikTok: 1-3 per day, LinkedIn: 2-3 per week. Consistency matters!",
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema questions={faqData} />
      {children}
    </>
  );
}
