/** Presentation only. Prices and fulfillment remain bound to the verified order. */
const packageArtwork = Object.freeze({
  '00000000-0000-4000-8000-000000000004': '/payments/plans/celebix-starter-v1.webp',
  '00000000-0000-4000-8000-000000000005': '/payments/plans/celebix-growth-v1.webp',
  '00000000-0000-4000-8000-000000000006': '/payments/plans/celebix-professional-v1.webp',
  '00000000-0000-4000-8000-000000000008': '/payments/plans/celebix-starter-v1.webp',
  '00000000-0000-4000-8000-000000000009': '/payments/plans/celebix-growth-v1.webp',
  '00000000-0000-4000-8000-000000000010': '/payments/plans/celebix-professional-v1.webp',
});

/** @param {string} kind @param {string} offerId */
export function checkoutArtwork(kind, offerId) {
  if (kind === 'toshi_credit') return '/payments/toshi-credit.svg';
  if (kind === 'tool') return '/payments/celebix-tools.jpg';
  return kind === 'package' && Object.hasOwn(packageArtwork, offerId)
    ? packageArtwork[offerId]
    : '/payments/celebix-package.jpg';
}
