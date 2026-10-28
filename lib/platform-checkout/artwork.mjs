/** Presentation only. Prices and fulfillment remain bound to the verified order. */
const packageArtwork = Object.freeze({
  '00000000-0000-4000-8000-000000000004': '/payments/plans/celebix-starter-v1.webp',
  '00000000-0000-4000-8000-000000000005': '/payments/plans/celebix-growth-v1.webp',
  '00000000-0000-4000-8000-000000000006': '/payments/plans/celebix-professional-v1.webp',
  '00000000-0000-4000-8000-000000000008': '/payments/plans/celebix-starter-v1.webp',
  '00000000-0000-4000-8000-000000000009': '/payments/plans/celebix-growth-v1.webp',
  '00000000-0000-4000-8000-000000000010': '/payments/plans/celebix-professional-v1.webp',
});
const toolArtwork = Object.freeze({
  contact_widget: '/payments/tools/celebix-contact-widget-v1.webp',
  whatsapp_ordering: '/payments/tools/celebix-whatsapp-ordering-v1.webp',
  cart_capture: '/payments/tools/celebix-cart-capture-v1.webp',
  restock: '/payments/tools/celebix-restock-v1.webp',
  order_bump: '/payments/tools/celebix-order-bump-v1.webp',
  all_tools: '/payments/tools/celebix-all-tools-v1.webp',
});
const creditArtwork = Object.freeze({
  'toshi-500': '/payments/toshi/toshi-500-v1.webp',
  'toshi-2500': '/payments/toshi/toshi-2500-v1.webp',
  'toshi-10000': '/payments/toshi/toshi-10000-v1.webp',
  'toshi-50000': '/payments/toshi/toshi-50000-v1.webp',
});

/** @param {string} kind @param {string} offerId */
export function checkoutArtwork(kind, offerId) {
  if (kind === 'toshi_credit') return Object.hasOwn(creditArtwork, offerId) ? creditArtwork[offerId] : '/payments/toshi-credit.svg';
  if (kind === 'tool') return Object.hasOwn(toolArtwork, offerId) ? toolArtwork[offerId] : '/payments/celebix-tools.jpg';
  return kind === 'package' && Object.hasOwn(packageArtwork, offerId)
    ? packageArtwork[offerId]
    : '/payments/celebix-package.jpg';
}
