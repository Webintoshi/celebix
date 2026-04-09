import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "Dijital Pazarlama Hizmetleri"
      : "Digital Marketing Services",
    description: isTr
      ? "Google Ads, SEO, içerik pazarlaması ve performans pazarlama. Dijital dünyada görünür olun, satışlarınızı artırın."
      : "Google Ads, SEO, content marketing and performance marketing. Be visible in the digital world, increase your sales.",
    keywords: isTr
      ? ["dijital pazarlama", "Google Ads", "SEO", "arama motoru optimizasyonu", "performans pazarlama", "dijital reklam", "Celebix pazarlama"]
      : ["digital marketing", "Google Ads", "SEO", "search engine optimization", "performance marketing", "digital advertising"],
    alternates: {
      canonical: `/${locale}/dijital-pazarlama`,
      languages: {
        tr: "/tr/dijital-pazarlama",
        en: "/en/dijital-pazarlama",
      },
    },
    openGraph: {
      title: isTr
        ? "Dijital Pazarlama Hizmetleri | Celebix"
        : "Digital Marketing Services | Celebix",
      description: isTr
        ? "Google Ads ve SEO uzmanlığı. Dijital dünyada işletmenizi büyütün."
        : "Google Ads and SEO expertise. Grow your business in the digital world.",
      url: `https://celebix.co/${locale}/dijital-pazarlama`,
      type: "website",
      images: [
        {
          url: "https://celebix.co/og-image.webp",
          width: 1200,
          height: 630,
          alt: isTr ? "Dijital Pazarlama Hizmetleri" : "Digital Marketing Services",
        },
      ],
    },
  };
}

export default function MarketingLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "Dijital Pazarlama" : "Digital Marketing", url: `/${locale}/dijital-pazarlama` },
  ];

  const serviceName = isTr ? "Dijital Pazarlama Hizmetleri" : "Digital Marketing Services";
  const serviceDesc = isTr 
    ? "Google Ads, SEO ve performans pazarlama hizmetleri"
    : "Google Ads, SEO and performance marketing services";

  const faqData = [
    {
      question: isTr ? "Dijital pazarlama fiyatları ne kadar?" : "How much does digital marketing cost?",
      answer: isTr 
        ? "Proje bazlı ve aylık retainer modelleri sunuyoruz. SEO: 5.000-15.000₺/ay, Google Ads: Reklam bütçesi + %15 yönetim ücreti."
        : "We offer project-based and monthly retainer models. SEO: 5,000-15,000₺/month, Google Ads: Ad budget + 15% management fee.",
    },
    {
      question: isTr ? "SEO sonuçları ne zaman görünür?" : "When will SEO results be visible?",
      answer: isTr
        ? "İlk sonuçlar 2-3 ayda, istikrarlı büyüme 6-12 ayda görülür. SEO uzun vadeli bir yatırımdır."
        : "First results in 2-3 months, steady growth in 6-12 months. SEO is a long-term investment.",
    },
    {
      question: isTr ? "Hangi sektörlere hizmet veriyorsunuz?" : "Which industries do you serve?",
      answer: isTr
        ? "E-ticaret, sağlık, eğitim, turizm, B2B hizmetler ve daha fazlası. Her sektöre özel strateji geliştiriyoruz."
        : "E-commerce, healthcare, education, tourism, B2B services and more. We develop custom strategies for each industry.",
    },
    {
      question: isTr ? "Raporlama nasıl yapılıyor?" : "How is reporting done?",
      answer: isTr
        ? "Aylık detaylı raporlar: Google Analytics, Search Console, Ads performansı. Haftalık kısa özetler."
        : "Monthly detailed reports: Google Analytics, Search Console, Ads performance. Weekly brief summaries.",
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name={serviceName} 
        description={serviceDesc} 
        url={`/${locale}/dijital-pazarlama`} 
      />
      <FAQSchema faqs={faqData} />
      {children}
    </>
  );
}
