import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, EcommerceProductSchema } from "@/components/SchemaScript";

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

  return (
    <>
      <OrganizationSchema />
      <EcommerceProductSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}
