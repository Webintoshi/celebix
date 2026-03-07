import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Viewport configuration (separate export for Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#F8F8F8',
};

// Comprehensive SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://celebix.co"),
  title: {
    default: "Premium Yazılım ve Dijital Çözümler | Celebix",
    template: "%s | Celebix"
  },
  description: "Celebix yazılım şirketi olarak e-ticaret, kurumsal yazılım ve dijital pazarlama hizmetleri sunuyoruz. İşletmenizi dijitalde büyütün.",
  keywords: [
    "e-ticaret",
    "dijital pazarlama",
    "kurumsal yazılım",
    "web tasarım",
    "mobil uygulama",
    "SEO",
    "sosyal medya yönetimi",
    "Google Ads",
    "Türkiye",
    "Ordu",
    "Tık Profil",
    "komisyonsuz e-ticaret",
    "e-ticaret paketleri",
    "yazılım şirketi",
    "dijital ajans"
  ],
  authors: [{ name: "Celebix", url: "https://celebix.co" }],
  creator: "Celebix",
  publisher: "Celebix",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://celebix.co",
    siteName: "Celebix",
    title: "Celebix | Premium E-Ticaret ve Dijital Çözümler",
    description: "Celebix ile işletmenizi dijital dünyada büyütün. AI destekli e-ticaret, kurumsal yazılım ve daha fazlası.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Celebix - Dijital Çözümler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@celebix",
    creator: "@celebix",
    title: "Celebix | Premium E-Ticaret ve Dijital Çözümler",
    description: "Celebix ile işletmenizi dijital dünyada büyütün. AI destekli e-ticaret, kurumsal yazılım ve daha fazlası.",
    images: ["/images/og-default.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "/",
    languages: {
      tr: "/tr",
      en: "/en",
    },
  },
  category: "technology",
  classification: "Business & Technology",
  referrer: "origin-when-cross-origin",
  other: {
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Celebix",
    "application-name": "Celebix",
    "msapplication-TileColor": "#F8F8F8",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
