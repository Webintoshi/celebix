// Display metadata and validation for the Owner's frozen Toshi credit offers.
/** @type {Readonly<Record<string, Readonly<{ credits: number; netCents: number }>>>} */
const offers = Object.freeze({
  'toshi-500': Object.freeze({ credits: 500, netCents: 24900 }),
  'toshi-2500': Object.freeze({ credits: 2500, netCents: 99900 }),
  'toshi-10000': Object.freeze({ credits: 10000, netCents: 299900 }),
  'toshi-50000': Object.freeze({ credits: 50000, netCents: 1249900 }),
});

/** @param {string} offerId */
export function getToshiCreditOffer(offerId) {
  return Object.hasOwn(offers, offerId) ? offers[offerId] : undefined;
}
