# Checkout redesign and one-lira Toshi purchase

User-directed implementation: remove store tools from the public Turkish product catalog only; preserve existing merchant tool rights and purchase history. Add a separately identified1Toshi credit test purchase for83kuruş net+17VAT=100kuruş total. Existing four offers/prices/orders remain immutable. Only authenticated store authority may create a quote; only verified provider settlement may grant exactly one credit, idempotently.

<design_plan>
Seed: 37; reference-fixed architecture: compact editorial split (product left, billing right).
Typography: Outfit, scoped to checkout. Components: one payment shell, large product pass, compact order ledger.
Motion: GSAP product reveal and fine-pointer tilt; success emphasis; reduced-motion static, cleanup mandatory.
Navigation: real Celebix logo. Attention: product pass. Interest/desire: actual order/store and amount. Action: existing iyzico hosted payment handoff. A marketing hero, scroll pinning or huge section spacing conflicts with this transaction-specific reference, so excluded.
Heading: full available pane width, compact size, at most2lines on ordinary mobile widths. No decorative section numbering.
Grid:2panes,1column on mobile; no empty cells, `grid-flow-dense`; readable dark-on-light fields and orange action.
</design_plan>

Purchase continuation is a strictly allowlisted non-authoritative SKU navigation hint. It must survive WhatsApp login and existing cross-host redemption, then select the fixed store credit page and start only the existing idempotent quote/handoff. It never supplies store access, amount, principal, arbitrary URL, consent or card details. Card entry and final payment remain iyzico-hosted and user-controlled.

Publish MAIN reader compatibility before exposing the SKU, additive SQL with disposable native tests and preserved routines/ACLs, then shared readers/panels NET→SITE with source-bound signup proof, finally public exposure. Preserve credentials/configuration and other applications. Root owns releases.
