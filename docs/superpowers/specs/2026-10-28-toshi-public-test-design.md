# Direct Toshi test purchase

The 1 TL / 1 credit test product must be purchasable without a merchant login.
Only this product gains a public purchase entry. Existing authenticated package,
tool and credit purchases keep their authorization and immutable prices.

The public entry asks for a store's public address, then opens the existing
branded billing and iyzico flow. A guest can pay to add one credit to that store;
this grants no account access or administrative permission. The displayed store
identity is confirmed before payment. Successful verified payment credits that
store exactly once. Unpaid orders never add credit.

Use a one-hour signed form capability, deterministic operation-bound checkout
session, bounded same-origin POST, persistent hashed-IP limits and server-fixed
83 net + 17 VAT pricing. Do not manufacture a principal or reuse a store owner's
membership. Add a private, explicit guest-test order marker and permit nullable
actors only for its exact one-credit shape. Existing provider amount/token/item
checks, callback recovery and wallet ledger are reused.

Rejected alternatives: sharing one privileged merchant checkout leaks a single
purchase between visitors; requiring a post-payment login does not meet the
requested direct experience. Public purchases of all other products are outside
this change. User has explicitly requested implementation without another
design approval cycle.
