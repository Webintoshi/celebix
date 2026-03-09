import { Inter } from "next/font/google";
import "../globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ subsets: ["latin"] });

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
