import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "Ekibimiz ve Değerlerimiz"
      : "Our Team and Values",
    description: isTr
      ? "Celebix'in hikayesi, ekibi ve değerleri. Ordu'dan Türkiye'ye, dijital dönüşümün öncüsü."
      : "Celebix's story, team and values. From Ordu to Turkey, the pioneer of digital transformation.",
    keywords: isTr
      ? ["Celebix hakkında", "ekip", "vizyon", "misyon", "dijital ajans Ordu", "Celebix kimdir"]
      : ["about Celebix", "team", "vision", "mission", "digital agency Ordu", "who is Celebix"],
    alternates: {
      canonical: `/${locale}/hakkimizda`,
      languages: {
        tr: "/tr/hakkimizda",
        en: "/en/hakkimizda",
      },
    },
    openGraph: {
      title: isTr
        ? "Hakkımızda | Celebix"
        : "About Us | Celebix",
      description: isTr
        ? "Celebix ekibi ve dijital dönüşüm yolculuğumuz."
        : "The Celebix team and our digital transformation journey.",
      url: `https://celebix.co/${locale}/hakkimizda`,
      type: "website",
      images: [
        {
          url: "https://celebix.co/og-image.webp",
          width: 1200,
          height: 630,
          alt: isTr ? "Hakkımızda" : "About Us",
        },
      ],
    },
  };
}

export default function AboutLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "Hakkımızda" : "About Us", url: `/${locale}/hakkimizda` },
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}
