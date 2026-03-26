import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr 
      ? "E-posta Pazarlama: KOBİ'ler İçin 2026 Başlangıç Rehberi"
      : "Email Marketing: 2026 Beginner's Guide for SMEs",
    description: isTr
      ? "2026 e-posta pazarlama stratejileri. Otomasyon, segmentasyon, A/B testleri. KOBİ bütçesine uygun email marketing rehberi ve şablonlar."
      : "2026 email marketing strategies. Automation, segmentation, A/B testing. Email marketing guide and templates for SME budgets.",
    keywords: isTr
      ? ["eposta pazarlama", "email marketing", "e-posta otomasyonu", "mailchimp", "brevo", "email marketing türkiye", "KOBİ email"]
      : ["email marketing", "email automation", "mailchimp", "brevo", "email marketing Turkey", "SME email"],
    alternates: {
      canonical: `/${locale}/eposta-pazarlama-kobi`,
      languages: {
        tr: "/tr/eposta-pazarlama-kobi",
        en: "/en/email-marketing-sme",
      },
    },
    openGraph: {
      title: isTr 
        ? "E-posta Pazarlama Rehberi 2026 | Celebix"
        : "Email Marketing Guide 2026 | Celebix",
      description: isTr
        ? "KOBİ'ler için kapsamlı e-posta pazarlama rehberi. Otomasyon, şablonlar, stratejiler."
        : "Comprehensive email marketing guide for SMEs. Automation, templates, strategies.",
      url: `https://celebix.co/${locale}/eposta-pazarlama-kobi`,
      type: "article",
      images: [
        {
          url: "https://celebix.co/og-email-marketing.webp",
          width: 1200,
          height: 630,
          alt: isTr ? "E-posta Pazarlama Rehberi - Celebix" : "Email Marketing Guide - Celebix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isTr ? "E-posta Pazarlama 2026 | Celebix" : "Email Marketing 2026 | Celebix",
      description: isTr
        ? "KOBİ'ler için e-posta pazarlama rehberi!"
        : "Email marketing guide for SMEs!",
      images: ["https://celebix.co/og-email-marketing.webp"],
    },
  };
}

export default function EmailMarketingLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "E-posta Pazarlama" : "Email Marketing", url: `/${locale}/eposta-pazarlama-kobi` },
  ];

  const faqData = [
    {
      question: isTr ? "E-posta pazarlama ne kadara mal olur?" : "How much does email marketing cost?",
      answer: isTr 
        ? "Başlangıç için ücretsiz planlar yeterli (Mailchimp 500 kontak). KOBİ ölçeğinde aylık $10-50 arası. Türkiye'de yerel çözümler ayda ₺500-2000."
        : "Free plans are sufficient to start (Mailchimp 500 contacts). SME scale $10-50 per month. Local solutions in Turkey ₺500-2000 per month.",
    },
    {
      question: isTr ? "Kaç e-posta göndermeliyim?" : "How many emails should I send?",
      answer: isTr
        ? "Bülten: Haftada 1-2, Promosyon: Ayda 2-4, Otomasyon: Trigger bazlı. Değer verdiğiniz sürece gönderin, spam olmaktan kaçının."
        : "Newsletter: 1-2 per week, Promotion: 2-4 per month, Automation: Trigger-based. Send as long as you provide value, avoid spam.",
    },
    {
      question: isTr ? "E-posta listem küçük, yine de başlamalı mıyım?" : "Should I start with a small email list?",
      answer: isTr
        ? "Kesinlikle evet! 100 kaliteli abone, 10.000 ilgisiz aboneden daha değerli. Liste organik büyür."
        : "Absolutely yes! 100 quality subscribers are more valuable than 10,000 irrelevant ones. The list grows organically.",
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
