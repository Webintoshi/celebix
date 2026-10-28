import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Güvenli ödeme',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
  referrer: 'no-referrer',
};
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <html lang="tr"><body className={`${outfit.className} min-h-screen bg-light-100 text-dark-900 antialiased`}>{children}</body></html>;
}
