import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, SaaSProductSchema, FAQSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "700₺/Ay Komisyonsuz E-Ticaret"
      : "Commission-Free E-Commerce at 700₺/Month",
    description: isTr
      ? "68 farklı sektöre özel, 700₺/ay sabit ücretle komisyonsuz e-ticaret. Ücretsiz SMS, WhatsApp Business ve AI destekli yönetim paneli."
      : "Commission-free e-commerce for 68 different sectors at a fixed 700₺/month. Free SMS, WhatsApp Business and AI-powered admin panel.",
    keywords: isTr
      ? ["Tık Profil", "komisyonsuz e-ticaret", "ucuz e-ticaret", "hazır e-ticaret sitesi", "SaaS e-ticaret", "Celebix SaaS", "700 tl e-ticaret"]
      : ["Tık Profil", "commission-free e-commerce", "affordable e-commerce", "ready e-commerce site", "SaaS e-commerce"],
    alternates: {
      canonical: `/${locale}/celebix-saas-platformu`,
      languages: {
        tr: "/tr/celebix-saas-platformu",
        en: "/en/celebix-saas-platformu",
      },
    },
    openGraph: {
      title: isTr
        ? "Tık Profil | 700₺/Ay Komisyonsuz E-Ticaret"
        : "Tık Profil | Commission-Free E-Commerce at 700₺/Month",
      description: isTr
        ? "68 sektör, sınırsız ürün, komisyon yok! 700₺/ay sabit ücretle profesyonel e-ticaret."
        : "68 sectors, unlimited products, no commission! Professional e-commerce at 700₺/month fixed price.",
      url: `https://celebix.co/${locale}/celebix-saas-platformu`,
      type: "website",
    },
  };
}

// FAQ data for schema
const faqsTr = [
  { question: "Tık Profil nedir?", answer: "Tık Profil, 68 farklı sektöre özel, aylık sadece 700₺ karşılığında komisyonsuz e-ticaret yapmanızı sağlayan Celebix SaaS platformudur." },
  { question: "Komisyon öder miyim?", answer: "Hayır, Tık Profil'de satış başına herhangi bir komisyon ödemezsiniz. Sadece aylık 700₺ sabit ücret ödersiniz." },
  { question: "Kaç ürün ekleyebilirim?", answer: "Tık Profil paketinde sınırsız ürün ekleme hakkına sahipsiniz." },
];

const faqsEn = [
  { question: "What is Tık Profil?", answer: "Tık Profil is a Celebix SaaS platform that allows you to do commission-free e-commerce for only 700₺/month, specially designed for 68 different sectors." },
  { question: "Do I pay commission?", answer: "No, with Tık Profil you don't pay any commission per sale. You only pay a fixed monthly fee of 700₺." },
  { question: "How many products can I add?", answer: "With the Tık Profil package, you have unlimited product addition rights." },
];

export default function SaaSLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: "Celebix SaaS", url: `/${locale}/celebix-saas-platformu` },
  ];

  const faqs = isTr ? faqsTr : faqsEn;

  return (
    <>
      <OrganizationSchema />
      <SaaSProductSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      {children}
    </>
  );
}
