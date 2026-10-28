const PAGE = 'https://celebix.net/tr/e-ticaret-paketleri';
function offer(name, price, url) {
  const amount = (price.totalCents / 100).toFixed(2);
  return {
    '@type': 'Offer', name, url, price: amount, priceCurrency: 'TRY',
    priceSpecification: { '@type': 'PriceSpecification', price: amount, priceCurrency: 'TRY', valueAddedTaxIncluded: true },
  };
}
/** Presentation metadata uses the same reviewed snapshot as the visible catalog. */
export function publicProductCatalogSchema(catalog) {
  const products = [
    ...catalog.plans.map(plan => {
      const url = `${PAGE}#urun-paket-${plan.code}`;
      return { name: plan.name, sku: plan.id, image: `https://celebix.net${plan.image}`, url, offers: [offer(`${plan.name} · Aylık peşin ödeme`, plan.monthly, url), offer(`${plan.name} · Yıllık peşin ödeme`, plan.annual, url)] };
    }),
    ...catalog.tools.map(tool => {
      const url = `${PAGE}#urun-arac-${tool.id}`;
      return { name: tool.name, sku: tool.id, image: `https://celebix.net${tool.image}`, url, offers: [offer(`${tool.name} · Tek seferlik ödeme`, tool, url)] };
    }),
    ...catalog.credits.map(credit => {
      const name = `${credit.credits.toLocaleString('tr-TR')} Toshi kredisi`, url = `${PAGE}#urun-kredi-${credit.id}`;
      return { name, sku: credit.id, image: `https://celebix.net${credit.image}`, url, offers: [offer(`${name} · Tek seferlik satın alma`, credit, url)] };
    }),
  ];
  return { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Celebix ürünleri', numberOfItems: products.length, itemListElement: products.map((product, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'Product', ...product } })) };
}
