import type { Metadata, Viewport } from "next";
import { BreadcrumbSchema, OrganizationSchema } from "@/components/SchemaScript";

export function generateViewport({ params }: { params: { locale: string } }): Viewport {
  return { themeColor: params.locale === "tr" ? "#f8f8f8" : "#4F46E5" };
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  const title = isTr ? "E-Ticaret Altyapısı ve Mağaza Paketleri | Celebix" : "E-Commerce Platform and Store Plans | Celebix";
  const description = isTr
    ? "Celebix ile kendi e-ticaret sitenizi kurun. Mağaza paketlerini ve Toshi kredilerini inceleyin, KDV dahil fiyatları karşılaştırın ve mağazanızı açın."
    : "Build an online store with Celebix. Compare store plans, product limits, VAT-inclusive prices, and Toshi credits.";
  const pathname = `/${locale}/e-ticaret-paketleri`;
  const imageUrl = "https://celebix.net/og-image.webp";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: pathname,
      languages: { tr: "/tr/e-ticaret-paketleri", en: "/en/e-ticaret-paketleri" },
    },
    openGraph: {
      title,
      description,
      url: `https://celebix.net${pathname}`,
      type: "website",
      locale: isTr ? "tr_TR" : "en_US",
      images: [{ url: imageUrl, width: 984, height: 492, alt: isTr ? "Celebix E-Ticaret" : "Celebix E-Commerce" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export default function EcommerceLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const isTr = locale === "tr";
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={[
        { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
        { name: isTr ? "E-Ticaret Paketleri" : "E-Commerce Plans", url: `/${locale}/e-ticaret-paketleri` },
      ]} />
      {children}
    </>
  );
}
