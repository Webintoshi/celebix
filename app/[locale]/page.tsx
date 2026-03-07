import { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Products from "@/components/sections/Products";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { 
  OrganizationSchema, 
  WebSiteSchema, 
  LocalBusinessSchema,
  BreadcrumbSchema 
} from "@/components/SchemaScript";

// Generate metadata based on locale
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  
  return {
    // Ana sayfa için absolute title (template uygulanmaz)
    title: {
      absolute: isTr 
        ? "Premium Yazılım ve Dijital Çözümler | Celebix"
        : "Premium Software & Digital Solutions | Celebix"
    },
    // Description max 155 karakter
    description: isTr
      ? "Celebix yazılım şirketi olarak e-ticaret, kurumsal yazılım ve dijital pazarlama hizmetleri sunuyoruz. İşletmenizi dijitalde büyütün."
      : "Celebix software company offers e-commerce, enterprise software and digital marketing services. Grow your business digitally.",
    keywords: isTr 
      ? ["yazılım şirketi", "e-ticaret", "dijital ajans", "web tasarım", "SEO", "sosyal medya", "Tık Profil"]
      : ["software company", "e-commerce", "digital agency", "web design", "SEO", "social media"],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
    openGraph: {
      title: isTr 
        ? "Premium Yazılım ve Dijital Çözümler | Celebix"
        : "Premium Software & Digital Solutions | Celebix",
      description: isTr
        ? "Celebix yazılım şirketi olarak e-ticaret, kurumsal yazılım ve dijital pazarlama hizmetleri sunuyoruz."
        : "Celebix software company offers e-commerce, enterprise software and digital marketing services.",
      url: `https://celebix.co/${locale}`,
    },
  };
}

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isTr = locale === "tr";
  
  // Breadcrumb items
  const breadcrumbItems = [
    { name: isTr ? "Ana Sayfa" : "Home", url: `/${locale}` },
  ];
  
  return (
    <>
      {/* Schema Markup */}
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Navigation locale={locale} />
      <main>
        <Hero locale={locale} />
        <TrustedBy locale={locale} />
        <Products locale={locale} />
        <Portfolio locale={locale} />
        <Process locale={locale} />
        <Testimonials locale={locale} />
        <CTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
