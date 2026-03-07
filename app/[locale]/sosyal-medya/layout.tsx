import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, ServiceSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "Sosyal Medya Yönetimi"
      : "Social Media Management",
    description: isTr
      ? "Profesyonel sosyal medya yönetimi, içerik üretimi ve topluluk yönetimi. Instagram, Facebook, LinkedIn ve X (Twitter) için stratejiler."
      : "Professional social media management, content creation and community management. Strategies for Instagram, Facebook, LinkedIn and X (Twitter).",
    keywords: isTr
      ? ["sosyal medya yönetimi", "içerik üretimi", "sosyal medya ajansı", "Instagram yönetimi", "LinkedIn pazarlama", "Celebix sosyal medya"]
      : ["social media management", "content creation", "social media agency", "Instagram management", "LinkedIn marketing"],
    alternates: {
      canonical: `/${locale}/sosyal-medya`,
      languages: {
        tr: "/tr/sosyal-medya",
        en: "/en/sosyal-medya",
      },
    },
    openGraph: {
      title: isTr
        ? "Sosyal Medya Yönetimi | Celebix"
        : "Social Media Management | Celebix",
      description: isTr
        ? "Instagram, Facebook, LinkedIn için profesyonel sosyal medya yönetimi."
        : "Professional social media management for Instagram, Facebook, LinkedIn.",
      url: `https://celebix.co/${locale}/sosyal-medya`,
      type: "website",
    },
  };
}

export default function SocialMediaLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "Sosyal Medya Yönetimi" : "Social Media Management", url: `/${locale}/sosyal-medya` },
  ];

  const serviceName = isTr ? "Sosyal Medya Yönetimi" : "Social Media Management";
  const serviceDesc = isTr 
    ? "Instagram, Facebook, LinkedIn ve X için içerik ve topluluk yönetimi"
    : "Content and community management for Instagram, Facebook, LinkedIn and X";

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name={serviceName} 
        description={serviceDesc} 
        url={`/${locale}/sosyal-medya`} 
      />
      {children}
    </>
  );
}
