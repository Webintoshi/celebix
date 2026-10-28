import assert from 'node:assert/strict';
import test from 'node:test';
import {checkoutArtwork} from '../lib/platform-checkout/artwork.mjs';

test('current and historical package IDs use the matching versioned product artwork',()=>{
 for(const [suffix,code]of [['004','starter'],['005','growth'],['006','professional'],['008','starter'],['009','growth'],['010','professional']]){
  assert.equal(checkoutArtwork('package','00000000-0000-4000-8000-000000000'+suffix),`/payments/plans/celebix-${code}-v1.webp`);
 }
});
test('unknown or prototype-shaped package IDs retain the existing safe generic fallback',()=>{
 for(const offerId of ['unknown','__proto__','constructor','toString','https://evil.example/image.webp','../../image.webp'])assert.equal(checkoutArtwork('package',offerId),'/payments/celebix-package.jpg');
});
test('tool and credit artwork cannot be overridden by a package offer ID',()=>{
 const planId='00000000-0000-4000-8000-000000000008';
 assert.equal(checkoutArtwork('tool',planId),'/payments/celebix-tools.jpg');
 assert.equal(checkoutArtwork('toshi_credit',planId),'/payments/toshi-credit.svg');
});
test('each individual tool and the bundle use their own versioned product artwork',()=>{
 for(const [offerId,want]of [
  ['contact_widget','/payments/tools/celebix-contact-widget-v1.webp'],
  ['whatsapp_ordering','/payments/tools/celebix-whatsapp-ordering-v1.webp'],
  ['cart_capture','/payments/tools/celebix-cart-capture-v1.webp'],
  ['restock','/payments/tools/celebix-restock-v1.webp'],
  ['order_bump','/payments/tools/celebix-order-bump-v1.webp'],
  ['all_tools','/payments/tools/celebix-all-tools-v1.webp'],
 ])assert.equal(checkoutArtwork('tool',offerId),want);
});
test('each Toshi credit pack uses its matching versioned product artwork',()=>{
 for(const [offerId,want]of [
  ['toshi-500','/payments/toshi/toshi-500-v1.webp'],
  ['toshi-2500','/payments/toshi/toshi-2500-v1.webp'],
  ['toshi-10000','/payments/toshi/toshi-10000-v1.webp'],
  ['toshi-50000','/payments/toshi/toshi-50000-v1.webp'],
 ])assert.equal(checkoutArtwork('toshi_credit',offerId),want);
});
test('unknown and prototype-shaped tool or credit IDs retain safe kind-specific fallbacks',()=>{
 for(const offerId of ['unknown','__proto__','constructor','toString','https://evil.example/image.webp','../../image.webp']){
  assert.equal(checkoutArtwork('tool',offerId),'/payments/celebix-tools.jpg');
  assert.equal(checkoutArtwork('toshi_credit',offerId),'/payments/toshi-credit.svg');
 }
 assert.equal(checkoutArtwork('tool','toshi-500'),'/payments/celebix-tools.jpg');
 assert.equal(checkoutArtwork('toshi_credit','all_tools'),'/payments/toshi-credit.svg');
 assert.equal(checkoutArtwork('package','contact_widget'),'/payments/celebix-package.jpg');
 assert.equal(checkoutArtwork('unknown','toshi-500'),'/payments/celebix-package.jpg');
});
