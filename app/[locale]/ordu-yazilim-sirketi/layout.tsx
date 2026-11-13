import { Metadata } from "next";
import { OrganizationSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  const description = isTr
    ? "Altınordu merkezli Celebix, işletmelere özel web ve mobil uygulamalar, kurumsal yazılım ve e-ticaret çözümleri geliştirir. Projeniz için görüşme planlayın."
    : "Celebix develops custom web and mobile apps, business software and e-commerce solutions from Altınordu, Ordu. Get in touch to discuss your project.";

  return {
    title: isTr 
      ? "Ordu Yazılım Şirketi ve Özel Yazılım"
      : "Ordu Software Company & Custom Development",
    description,
    keywords: isTr
      ? ["ordu yazılım şirketi", "ordu web tasarım", "karadeniz yazılım", "özel yazılım ordu", "yazılım firması ordu", "mobil uygulama ordu"]
      : ["ordu software company", "ordu web design", "karadeniz software", "custom software ordu", "software company ordu"],
    alternates: {
      canonical: `/${locale}/ordu-yazilim-sirketi`,
      languages: {
        tr: "/tr/ordu-yazilim-sirketi",
        en: "/en/ordu-yazilim-sirketi",
        "x-default": "/tr/ordu-yazilim-sirketi",
      },
    },
    openGraph: {
      title: isTr 
        ? "Ordu Yazılım Şirketi | Celebix"
        : "Ordu Software Company | Celebix",
      description,
      url: `https://celebix.net/${locale}/ordu-yazilim-sirketi`,
      type: "website",
      images: [
        {
          url: "https://celebix.net/og-ordu-software.webp",
          width: 1200,
          height: 630,
          alt: isTr ? "Ordu Yazılım Şirketi - Celebix" : "Ordu Software Company - Celebix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isTr ? "Ordu Yazılım Şirketi | Celebix" : "Ordu Software Company | Celebix",
      description,
      images: ["https://celebix.net/og-ordu-software.webp"],
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

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}
