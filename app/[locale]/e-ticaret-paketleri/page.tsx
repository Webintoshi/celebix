import { Suspense } from 'react';
import CommerceLanding from '@/components/commerce-v6/CommerceLanding';
import LegacyEcommercePage from '@/components/commerce-v6/LegacyEcommercePage';
import PublicProductCatalog from '@/components/public-products/PublicProductCatalog';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import catalog from '@/components/public-products/catalog.snapshot.json';
import { publicProductCatalogSchema } from '@/components/public-products/schema.mjs';

interface EcommercePageProps {
  params: { locale: string };
  searchParams?: { checkout?: string | string[] };
}

export default function EcommercePage({ params, searchParams }: EcommercePageProps) {
  if (searchParams?.checkout === 'success') {
    return <Suspense><LegacyEcommercePage params={params} /></Suspense>;
  }
  if (params.locale === 'tr') {
    return <>
      <CommerceLanding />
      <PublicProductCatalog />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicProductCatalogSchema(catalog)).replace(/</g, '\\u003c') }} />
    </>;
  }
  return <>
    <Navigation locale="en" />
    <main>
      <section className="bg-light-100 px-5 pb-12 pt-32 sm:px-8 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="font-display text-4xl leading-tight text-dark-900 sm:text-6xl">E-Commerce Platform and Store Plans</h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-900/70">Open an online store under your own brand and manage products, orders, and customers from one dashboard.</p>
          <a href="#paketler" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-dark-900 px-6 py-3 text-sm font-medium text-white">Compare plans</a>
        </div>
      </section>
      <PublicProductCatalog locale="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicProductCatalogSchema(catalog, 'en')).replace(/</g, '\\u003c') }} />
    </main>
    <Footer locale="en" />
  </>;
}
