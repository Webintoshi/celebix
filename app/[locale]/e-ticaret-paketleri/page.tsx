import { Suspense } from 'react';
import CommerceLanding from '@/components/commerce-v6/CommerceLanding';
import LegacyEcommercePage from '@/components/commerce-v6/LegacyEcommercePage';

interface EcommercePageProps {
  params: { locale: string };
  searchParams?: { checkout?: string | string[] };
}

export default function EcommercePage({ params, searchParams }: EcommercePageProps) {
  // Preserve the existing English page and payment-return confirmation flow.
  if (params.locale !== 'tr' || searchParams?.checkout === 'success') {
    return <Suspense><LegacyEcommercePage params={params} /></Suspense>;
  }
  return <CommerceLanding />;
}
