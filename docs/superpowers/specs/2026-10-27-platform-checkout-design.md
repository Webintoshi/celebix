# Celebix checkout design

Requested directly for implementation: Shopify-style checkout with Celebix colors, product images and explicit purchasing store. Existing authenticated checkout already binds storeId/storeName and atomically fulfills verified payment; real card testing remains outstanding.

## Design
White left form, neutral #F7F7F7 right order summary; #FF6B00 primary action, #242424 text, thin neutral borders. Desktop two columns with a sticky summary; mobile summary appears before the form, with no hidden store or total. Inter/system sans, 28px main heading, 14–16px controls, 8px input radius. Generated full-page concept: `.tmp/checkout-design/concept.png`. Use existing trusted form names, constraints, POST action and hidden attemptId exactly. No card fields or new credentials.

Header: Celebix wordmark and lock/Güvenli ödeme. Form: Satın almayı tamamla; Satın alan mağaza + verified storeName and explicit assignment note; İletişim bilgileri, Fatura bilgileri, Ödeme yöntemi, existing consent, iyzico submit. Summary: Sipariş özeti; local product artwork by package/tool kind; frozen title, term, net/VAT/gross; storeName; automatic assignment note; one-time/prepaid explanation. Approved state explicitly confirms the named store; pending/review never imply activation. No polling or auto submit.

## Approach
Use the existing server-rendered CheckoutView and local generated product assets. This keeps authority and payment code unchanged and avoids adding a separate checkout or broadening shared APIs. Cosmetic product artwork is not authoritative and never determines price/rights. No database, Owner or panel change needed for this presentation.

## Constraints
Only Ezmeo visible live QA. No real charge or terms acceptance. Preserve existing rights, totals, callback security and analytics suppression. Local browser fixtures must never call the real payment bridge. Existing source-only Main deployment controls retained; all six shared runtimes immutable.
