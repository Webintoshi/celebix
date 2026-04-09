import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, EcommerceProductSchema, FAQSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "Premium E-Ticaret Platformu"
      : "Premium E-Commerce Platform",
    description: isTr
      ? "19.000₺'den başlayan, AI destekli, sınırsız ürün kapasiteli premium e-ticaret platformu. Komisyon yok, sınırsız özellik!"
      : "Starting from 19,000₺, AI-powered, unlimited product capacity premium e-commerce platform. No commission, unlimited features!",
    keywords: isTr
      ? ["e-ticaret paketleri", "online satış", "e-ticaret sitesi", "sanal mağaza", "eticaret çözümleri", "komisyonsuz e-ticaret", "Celebix e-ticaret"]
      : ["e-commerce packages", "online sales", "e-commerce website", "virtual store", "e-commerce solutions"],
    alternates: {
      canonical: `/${locale}/e-ticaret-paketleri`,
      languages: {
        tr: "/tr/e-ticaret-paketleri",
        en: "/en/e-ticaret-paketleri",
      },
    },
    openGraph: {
      title: isTr
        ? "Celebix E-Ticaret | Premium Online Satış Platformu"
        : "Celebix E-Commerce | Premium Online Sales Platform",
      description: isTr
        ? "AI destekli, sınırsız ürün kapasiteli premium e-ticaret. 19.000₺/yıl, komisyon yok!"
        : "AI-powered, unlimited product capacity premium e-commerce. 19,000₺/year, no commission!",
      url: `https://celebix.co/${locale}/e-ticaret-paketleri`,
      type: "website",
      images: [
        {
          url: "https://celebix.co/og-image.webp",
          width: 1200,
          height: 630,
          alt: isTr ? "Celebix E-Ticaret Platformu" : "Celebix E-Commerce Platform",
        },
      ],
    },
  };
}

export default function ETicaretLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "E-Ticaret Paketleri" : "E-Commerce Packages", url: `/${locale}/e-ticaret-paketleri` },
  ];

  const faqData = [
    {
      question: isTr ? "E-ticaret paketleri ne kadar?" : "How much are e-commerce packages?",
      answer: isTr 
        ? "Yıllık 19.000₺'den başlayan fiyatlarla. Komisyon yok, gizli ücret yok. Tüm özellikler dahil."
        : "Starting from 19,000₺ per year. No commission, no hidden fees. All features included.",
    },
    {
      question: isTr ? "Kaç ürün ekleyebilirim?" : "How many products can I add?",
      answer: isTr
        ? "Sınırsız! Dilediğiniz kadar ürün, kategori ve varyant ekleyebilirsiniz."
        : "Unlimited! You can add as many products, categories and variants as you want.",
    },
    {
      question: isTr ? "Ödeme altyapısı hangileri?" : "Which payment infrastructures?",
      answer: isTr
        ? "PayTR, iyzico, Stripe ve havale/EFT entegrasyonları hazır. 12 taksit imkanı."
        : "PayTR, iyzico, Stripe and wire transfer/EFT integrations are ready. 12 installment option.",
    },
    {
      question: isTr ? "Teknik bilgim olmadan kullanabilir miyim?" : "Can I use without technical knowledge?",
      answer: isTr
        ? "Kesinlikle! Kullanıcı dostu panel, 7/24 destek ve eğitim videoları ile kolay yönetim."
        : "Absolutely! Easy management with user-friendly panel, 24/7 support and training videos.",
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <EcommerceProductSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqData} />
      {children}
    </>
  );
}
