import { Suspense } from 'react';
import CommerceLanding from '@/components/commerce-v6/CommerceLanding';
import LegacyEcommercePage from '@/components/commerce-v6/LegacyEcommercePage';
import PublicProductCatalog from '@/components/public-products/PublicProductCatalog';
import catalog from '@/components/public-products/catalog.snapshot.json';
import { publicProductCatalogSchema } from '@/components/public-products/schema.mjs';

interface EcommercePageProps {
  params: { locale: string };
  searchParams?: { checkout?: string | string[] };
}

export default function EcommercePage({ params, searchParams }: EcommercePageProps) {
  // Preserve the existing English page and payment-return confirmation flow.
  if (params.locale !== 'tr' || searchParams?.checkout === 'success') {
    return <Suspense><LegacyEcommercePage params={params} /></Suspense>;
  }
  return <><CommerceLanding /><PublicProductCatalog /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicProductCatalogSchema(catalog)).replace(/</g, '\\u003c') }} /></>;
}
