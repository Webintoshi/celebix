import { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/SchemaScript";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    title: isTr
      ? "Kurumsal Yazılım Geliştirme"
      : "Enterprise Software Development",
    description: isTr
      ? "Özel kurumsal yazılım çözümleri, web ve mobil uygulama geliştirme. İşletmenize özel, ölçeklenebilir teknolojiler."
      : "Custom enterprise software solutions, web and mobile application development. Scalable technologies tailored to your business.",
    keywords: isTr
      ? ["kurumsal yazılım", "özel yazılım", "web uygulama", "mobil uygulama", "yazılım geliştirme", "ERP yazılımı", "Celebix yazılım"]
      : ["enterprise software", "custom software", "web application", "mobile application", "software development", "ERP software"],
    alternates: {
      canonical: `/${locale}/kurumsal-yazilim`,
      languages: {
        tr: "/tr/kurumsal-yazilim",
        en: "/en/kurumsal-yazilim",
      },
    },
    openGraph: {
      title: isTr
        ? "Kurumsal Yazılım Geliştirme | Celebix"
        : "Enterprise Software Development | Celebix",
      description: isTr
        ? "İşletmenize özel yazılım çözümleri. Web, mobil ve kurumsal uygulama geliştirme."
        : "Custom software solutions for your business. Web, mobile and enterprise application development.",
      url: `https://celebix.co/${locale}/kurumsal-yazilim`,
      type: "website",
    },
  };
}

export default function SoftwareLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isTr = locale === "tr";
  
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
    { name: isTr ? "Kurumsal Yazılım" : "Enterprise Software", url: `/${locale}/kurumsal-yazilim` },
  ];

  const serviceName = isTr ? "Kurumsal Yazılım Geliştirme" : "Enterprise Software Development";
  const serviceDesc = isTr 
    ? "İşletmelere özel web ve mobil uygulama geliştirme hizmetleri"
    : "Custom web and mobile application development services for businesses";

  const faqData = [
    {
      question: isTr ? "Proje süresi ne kadar sürer?" : "How long does the project take?",
      answer: isTr 
        ? "Proje kapsamına göre 8-24 hafta arası değişir. Detaylı timeline proje başlangıcında sunulur."
        : "Varies between 8-24 weeks depending on project scope. Detailed timeline provided at project start.",
    },
    {
      question: isTr ? "Hangi teknolojileri kullanıyorsunuz?" : "What technologies do you use?",
      answer: isTr
        ? "React, Next.js, Node.js, React Native, Flutter, Python/Django. Modern ve ölçeklenebilir teknolojiler."
        : "React, Next.js, Node.js, React Native, Flutter, Python/Django. Modern and scalable technologies.",
    },
    {
      question: isTr ? "Kod mülkiyeti bize ait olacak mı?" : "Will we own the code?",
      answer: isTr
        ? "Evet, proje tesliminde tüm kaynak kodları ve dokümantasyon size devredilir."
        : "Yes, all source code and documentation is transferred to you upon project delivery.",
    },
    {
      question: isTr ? "Sonrası destek sağlıyor musunuz?" : "Do you provide post-launch support?",
      answer: isTr
        ? "3-6 ay garanti süresi ve sonrasında aylık bakım paketleri sunuyoruz."
        : "We offer 3-6 month warranty period and monthly maintenance packages afterwards.",
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name={serviceName} 
        description={serviceDesc} 
        url={`/${locale}/kurumsal-yazilim`} 
      />
      <FAQSchema faqs={faqData} />
      {children}
    </>
  );
}
