import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, WebSiteSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "Dijital Dünya ve E-Ticaret Rehberi"
      : "Digital World and E-Commerce Guide",
    description: isTr
      ? "E-ticaret, dijital pazarlama, SEO ve yazılım dünyasından güncel haberler, ipuçları ve uzman görüşleri."
      : "Current news, tips and expert opinions from the world of e-commerce, digital marketing, SEO and software.",
    keywords: isTr
      ? ["e-ticaret blog", "dijital pazarlama blog", "SEO ipuçları", "yazılım geliştirme", "teknoloji haberleri", "Celebix blog"]
      : ["e-commerce blog", "digital marketing blog", "SEO tips", "software development", "tech news", "Celebix blog"],
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        tr: "/tr/blog",
        en: "/en/blog",
      },
    },
    openGraph: {
      title: isTr
        ? "Blog | Celebix"
        : "Blog | Celebix",
      description: isTr
        ? "Dijital dünyadan güncel haberler ve uzman görüşleri."
        : "Current news and expert opinions from the digital world.",
      url: `https://celebix.co/${locale}/blog`,
      type: "website",
      images: [
        {
          url: "https://celebix.co/og-image.webp",
          width: 1200,
          height: 630,
          alt: "Blog",
        },
      ],
    },
  };
}

export default function BlogLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: "Blog", url: `/${locale}/blog` },
  ];

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}
