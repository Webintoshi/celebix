import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        {children}
      </body>
    </html>
  );
}
