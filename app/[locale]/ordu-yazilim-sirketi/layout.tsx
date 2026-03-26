import { Metadata } from "next";
import { OrganizationSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr 
      ? "Ordu Yazılım Şirketi | Celebix - Özel Yazılım Çözümleri"
      : "Ordu Software Company | Celebix - Custom Software Solutions",
    description: isTr
      ? "Ordu'da profesyonel yazılım şirketi. Web, mobil, kurumsal yazılım. %30 daha uygun fiyat, 7/24 destek, yüz yüze iletişim. Ücretsiz keşif görüşmesi!"
      : "Professional software company in Ordu. Web, mobile, enterprise software. 30% more affordable, 24/7 support, face-to-face communication.",
    keywords: isTr
      ? ["ordu yazılım şirketi", "ordu web tasarım", "karadeniz yazılım", "özel yazılım ordu", "yazılım firması ordu", "mobil uygulama ordu"]
      : ["ordu software company", "ordu web design", "karadeniz software", "custom software ordu", "software company ordu"],
    alternates: {
      canonical: `/${locale}/ordu-yazilim-sirketi`,
      languages: {
        tr: "/tr/ordu-yazilim-sirketi",
        en: "/en/ordu-software-company",
      },
    },
    openGraph: {
      title: isTr 
        ? "Ordu Yazılım Şirketi | Celebix"
        : "Ordu Software Company | Celebix",
      description: isTr
        ? "Ordu'da profesyonel yazılım hizmetleri. Web, mobil, kurumsal yazılım. %30 uygun fiyat, 7/24 destek."
        : "Professional software services in Ordu. Web, mobile, enterprise software. Affordable prices, 24/7 support.",
      url: `https://celebix.co/${locale}/ordu-yazilim-sirketi`,
      type: "website",
      images: [
        {
          url: "https://celebix.co/og-ordu-software.webp",
          width: 1200,
          height: 630,
          alt: isTr ? "Ordu Yazılım Şirketi - Celebix" : "Ordu Software Company - Celebix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isTr ? "Ordu Yazılım Şirketi | Celebix" : "Ordu Software Company | Celebix",
      description: isTr
        ? "Ordu'da profesyonel yazılım hizmetleri. %30 uygun fiyat!"
        : "Professional software services in Ordu. Affordable prices!",
      images: ["https://celebix.co/og-ordu-software.webp"],
    },
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
  };
}

export default function OrduSoftwareLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "Ordu Yazılım Şirketi" : "Ordu Software Company", url: `/${locale}/ordu-yazilim-sirketi` },
  ];

  const faqData = [
    {
      question: isTr ? "Ordu'da yazılım şirketi fiyatları ne kadar?" : "How much do software companies in Ordu charge?",
      answer: isTr 
        ? "Proje kapsamına göre değişir. Basit bir web sitesi 50.000-100.000 TL, kurumsal yazılım projeleri 300.000 TL ve üzeri. İstanbul'a göre %30-40 daha uygun fiyatlar sunuyoruz."
        : "It varies by project scope. A simple website 50,000-100,000 TL, enterprise software 300,000 TL+. We offer 30-40% more affordable prices than Istanbul.",
    },
    {
      question: isTr ? "Projeler ne kadar sürüyor?" : "How long do projects take?",
      answer: isTr
        ? "Kurumsal web sitesi: 4-8 hafta, E-ticaret platformu: 8-12 hafta, Mobil uygulama: 12-16 hafta, Kurumsal yazılım: 16-24 hafta."
        : "Corporate website: 4-8 weeks, E-commerce: 8-12 weeks, Mobile app: 12-16 weeks, Enterprise software: 16-24 weeks.",
    },
    {
      question: isTr ? "Kod mülkiyeti bize ait olacak mı?" : "Will we own the code?",
      answer: isTr
        ? "Kesinlikle evet. Proje tesliminde tüm kaynak kodları ve dokümantasyon size devredilir."
        : "Absolutely yes. All source code and documentation is transferred to you upon delivery.",
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema questions={faqData} />
      {children}
    </>
  );
}
