import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, ServiceSchema } from "@/components/SchemaScript";

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

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name={serviceName} 
        description={serviceDesc} 
        url={`/${locale}/dijital-pazarlama`} 
      />
      {children}
    </>
  );
}
