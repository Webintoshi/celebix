import type { Viewport } from 'next';
import { Inter } from "next/font/google";
import "../globals.css";
import FloatingButtons from "@/components/FloatingButtons";

// Font optimization for Core Web Vitals
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

// Viewport configuration for Core Web Vitals
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4F46E5',
};

// Google Tag Manager ID
const GTM_ID = "GTM-WXQCTF5D";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Preconnect for external resources - Core Web Vitals optimization */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-light-100 text-dark-900 antialiased overflow-x-hidden safe-area-inset`}>
        {/* Google Tag Manager - NoScript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
