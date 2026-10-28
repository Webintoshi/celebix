# Public products and branded checkout

Direct implementation scope: use the actual Celebix logo in checkout, improve visual hierarchy without changing payment semantics, and publish the currently sold software plans, store tools and Toshi credit packs on the Turkish e-commerce products page.

Preserve the existing interactive demo and its first viewport. Add an immediately reachable product-catalog anchor to the header and introduction, with a server-rendered catalog following the demo outside its runtime-owned DOM. Keep current legal/contact navigation accessible. Existing English and historical payment-return flows remain compatible.

Reuse approved product artwork and the actual brand asset. Prices lead with the existing VAT-inclusive payable amount. Four plans support monthly/annual viewing; five standalone tools plus their bundle and four credit packs use one-time prices. Explain real coverage and applicable plan requirements, with no invented unlimited rights or per-operation usage table.

The catalog is a reviewed reproducible snapshot of the shared platform's canonical product definitions, with source provenance. Public buttons lead to the verified merchant login (https://panel.saas-staging.celebix.net/login); free signup uses https://kayit.celebix.net/. The user chooses the product inside their authorized store panel before the existing signed checkout handoff. No anonymous payment without a target store, unsupported redirect parameters or new authentication behavior.

Checkout retains all field names, validation, POST actions, attempt binding, store identity, unchecked required terms, frozen amounts and result/retry gates. Only appearance changes. Verify desktop/mobile, all checkout states, catalog period controls, real artwork and navigation, focused existing transaction tests, and one integrated production build. Root alone publishes the reviewed main-site commit with guarded configuration snapshots; other shared applications remain unchanged.
