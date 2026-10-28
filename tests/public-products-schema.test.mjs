import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
const catalog = JSON.parse(readFileSync(new URL('../components/public-products/catalog.snapshot.json', import.meta.url), 'utf8'));
const { publicProductCatalogSchema } = await import('../components/public-products/schema.mjs').catch(() => ({}));
test('catalog structured data covers the same fourteen products and VAT-inclusive offers', () => {
  const schema = publicProductCatalogSchema?.(catalog);
  assert.equal(schema?.numberOfItems, 14);
  const products = schema.itemListElement.map(entry => entry.item);
  assert.deepEqual(products.map(product => product.sku), [...catalog.plans, ...catalog.tools, ...catalog.credits].map(product => product.id));
  assert.deepEqual(products[1].offers.map(offer => offer.price), ['3104.40', '31044.00']);
  assert.equal(products[4].offers[0].price, '1188.00'); assert.equal(products[10].offers[0].price, '298.80');
  for (const product of products) {
    assert.match(product.image, /^https:\/\/celebix\.net\/payments\//);
    for (const offer of product.offers) {
      assert.equal(offer.priceCurrency, 'TRY'); assert.equal(offer.priceSpecification.valueAddedTaxIncluded, true);
      assert.equal(offer.price, offer.priceSpecification.price);
      assert.match(offer.url, /^https:\/\/celebix\.net\/tr\/e-ticaret-paketleri#urun-/);
      assert.equal(offer.availability, undefined);
    }
  }
});
