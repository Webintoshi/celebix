import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "Projenizi Konuşun"
      : "Discuss Your Project",
    description: isTr
      ? "Celebix ile iletişime geçin. E-ticaret, yazılım veya dijital pazarlama projeleriniz için ücretsiz danışmanlık."
      : "Contact Celebix. Free consultation for your e-commerce, software or digital marketing projects.",
    keywords: isTr
      ? ["Celebix iletişim", "teklif al", "dijital ajans iletişim", "yazılım şirketi iletişim", "Celebix telefon"]
      : ["Celebix contact", "get quote", "digital agency contact", "software company contact", "Celebix phone"],
    alternates: {
      canonical: `/${locale}/iletisim`,
      languages: {
        tr: "/tr/iletisim",
        en: "/en/iletisim",
      },
    },
    openGraph: {
      title: isTr
        ? "İletişim | Celebix"
        : "Contact | Celebix",
      description: isTr
        ? "Projeniz için ücretsiz danışmanlık alın."
        : "Get free consultation for your project.",
      url: `https://celebix.co/${locale}/iletisim`,
      type: "website",
    },
  };
}

export default function ContactLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "İletişim" : "Contact", url: `/${locale}/iletisim` },
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
