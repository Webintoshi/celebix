import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "Projeler ve Referanslar"
      : "Projects and References",
    description: isTr
      ? "Celebix'in tamamladığı projeler, müşteri referansları ve başarı hikayeleri. E-ticaret, yazılım ve dijital pazarlama çalışmalarımız."
      : "Projects completed by Celebix, client references and success stories. Our e-commerce, software and digital marketing work.",
    keywords: isTr
      ? ["Celebix portfolyo", "referanslar", "projeler", "e-ticaret örnekleri", "yazılım projeleri", "müşteri çalışmaları"]
      : ["Celebix portfolio", "references", "projects", "e-commerce examples", "software projects", "client work"],
    alternates: {
      canonical: `/${locale}/portfoy`,
      languages: {
        tr: "/tr/portfoy",
        en: "/en/portfoy",
      },
    },
    openGraph: {
      title: isTr
        ? "Portfolyo | Celebix Projeleri"
        : "Portfolio | Celebix Projects",
      description: isTr
        ? "Tamamladığımız projeler ve müşteri başarı hikayeleri."
        : "Our completed projects and client success stories.",
      url: `https://celebix.co/${locale}/portfoy`,
      type: "website",
      images: [
        {
          url: "https://celebix.co/og-image.webp",
          width: 1200,
          height: 630,
          alt: isTr ? "Portföy" : "Portfolio",
        },
      ],
    },
  };
}

export default function PortfolioLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "Portfolyo" : "Portfolio", url: `/${locale}/portfoy` },
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}
