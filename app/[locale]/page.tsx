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
import { LocalBusinessSchema, OrganizationSchema, WebSiteSchema } from "@/components/SchemaScript";
import { absoluteSiteUrl } from "@/lib/site";

// Generate metadata based on locale
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const isTr = locale === "tr";
  const title = isTr ? "Kurumsal Yazılım ve E-Ticaret Çözümleri | Celebix" : "Business Software & E-Commerce Solutions | Celebix";
  const description = isTr
    ? "Celebix ile e-ticaret mağazanızı kurun, işletmenize özel web ve mobil yazılım geliştirin. Google Ads, Meta reklamları ve SEO hizmetlerimizi inceleyin."
    : "Launch an online store with Celebix or build custom web and mobile software for your business. Explore our Google Ads, Meta advertising and SEO services.";
  const imageUrl = absoluteSiteUrl("/og-image.webp");

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        tr: "/tr",
        en: "/en",
        "x-default": "/tr",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Celebix",
      locale: isTr ? "tr_TR" : "en_US",
      alternateLocale: [isTr ? "en_US" : "tr_TR"],
      title,
      description,
      url: absoluteSiteUrl(`/${locale}`),
      images: [{ url: imageUrl, width: 984, height: 492, alt: "Celebix" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  return (
    <>
      {/* Schema Markup */}
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      
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
