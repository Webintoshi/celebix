import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
const catalog = JSON.parse(readFileSync(new URL('../components/public-products/catalog.snapshot.json', import.meta.url), 'utf8'));
const { publicProductCatalogSchema } = await import('../components/public-products/schema.mjs').catch(() => ({}));
test('catalog structured data covers the same public plans and credits only and VAT-inclusive offers', () => {
  const schema = publicProductCatalogSchema?.(catalog);
  assert.equal(schema?.numberOfItems, 8);
  const products = schema.itemListElement.map(entry => entry.item);
  assert.deepEqual(products.map(product => product.sku), [...catalog.plans,  ...catalog.credits].map(product => product.id));
  assert.deepEqual(products[1].offers.map(offer => offer.price), ['3104.40', '31044.00']);
  assert.equal(products[4].offers[0].price, '298.80'); assert.ok(!products.some(product => product.url.includes('urun-arac-')));
  assert.ok(!products.some(product=>product.sku==='toshi-test-1'));
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

test('a stale presentation snapshot cannot advertise the retired test offer',()=>{
  const schema=publicProductCatalogSchema({...catalog,credits:[{id:'toshi-test-1',credits:1,totalCents:100,image:'/payments/toshi/toshi-test-1-v1.webp'},...catalog.credits]});
  assert.equal(schema.numberOfItems,8);
  assert.ok(!schema.itemListElement.some(entry=>entry.item.sku==='toshi-test-1'));
});
