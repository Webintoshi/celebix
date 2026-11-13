export const englishPlanNames = { free_starter: 'Free', starter: 'Starter', growth: 'Growth', professional: 'Professional' };
function offer(name, price, url) {
  const amount = (price.totalCents / 100).toFixed(2);
  return {
    '@type': 'Offer', name, url, price: amount, priceCurrency: 'TRY',
    priceSpecification: { '@type': 'PriceSpecification', price: amount, priceCurrency: 'TRY', valueAddedTaxIncluded: true },
  };
}
/** Presentation metadata uses the same reviewed snapshot as the visible catalog. */
export function publicProductCatalogSchema(catalog, locale = 'tr') {
  const isTr = locale === 'tr';
  const page = `https://celebix.net/${locale}/e-ticaret-paketleri`;
  const language = isTr ? 'tr-TR' : 'en-GB';
  const products = [
    ...catalog.plans.map(plan => {
      const url = `${page}#urun-paket-${plan.code}`;
      const name = isTr ? plan.name : englishPlanNames[plan.code] ?? plan.name;
      return { name, sku: plan.id, image: `https://celebix.net${plan.image}`, url, offers: [offer(`${name} · ${isTr ? 'Aylık peşin ödeme' : 'Monthly prepayment'}`, plan.monthly, url), offer(`${name} · ${isTr ? 'Yıllık peşin ödeme' : 'Annual prepayment'}`, plan.annual, url)] };
    }),
    ...catalog.credits.filter(credit=>credit.id!=='toshi-test-1').map(credit => {
      const name = `${credit.credits.toLocaleString(language)} ${isTr ? 'Toshi kredisi' : 'Toshi credits'}`, url = `${page}#urun-kredi-${credit.id}`;
      return { name, sku: credit.id, image: `https://celebix.net${credit.image}`, url, offers: [offer(`${name} · ${isTr ? 'Tek seferlik satın alma' : 'One-time purchase'}`, credit, url)] };
    }),
  ];
  return { '@context': 'https://schema.org', '@type': 'ItemList', name: isTr ? 'Celebix ürünleri' : 'Celebix products', numberOfItems: products.length, itemListElement: products.map((product, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'Product', ...product } })) };
}
