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
