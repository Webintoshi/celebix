# Celebix V6 integration implementation plan

Goal: port the approved V6 to the existing Turkish ecommerce route.
Spec: approved celebix-cinematic-v6.html (2026-10-24).
Architecture: SSR trusted markup inside one React-owned opaque host; instance-scoped JavaScript and Tailwind component-layer CSS. No new runtime dependencies.

- [x] Preserve V6 copy, seven scenes, #F8F8F8 canvas and text on #FE6100 actions.
- [x] Isolate styles and serve product imagery as local assets.
- [x] Mount/dispose effects, listeners, timers and RAF safely across client navigation.
- [x] Connect /tr/e-ticaret-paketleri; preserve English content and payment-return UI.
- [x] Align Turkish metadata/schema with visible content; preserve canonical route.
- [x] Production build (464 routes), TypeScript build checks and five lifecycle regression tests.
- [x] HTTP/SSR checks: Turkish page, English legacy page, checkout-success flow, corporate homepage and local SVG assets.
- [x] Browser checks on the integrated Next.js route: desktop opening, button-triggered playback, pause, return to opening and mobile composition. No framework overlay or relevant console errors.
- [x] Create isolated review branch codex/celebix-ecommerce-v6-20261024 and draft PR https://github.com/Webintoshi/celebix/pull/72.

Validation: build must pass; both locales and the existing checkout-success flow must render. Browser checks cover composition, native dialog focus, reduced motion, product edits and sample orders; reload and client remount must not duplicate global handlers.

Opening refinement (2026-10-24):
- [x] One message: “Kendi markanızla satışa başlayın.” and one central “Nasıl çalıştığını görün” button.
- [x] Initial scene fills one viewport; timeline and camera remain hidden and inert until the visitor starts.
- [x] Start at the product scene and play the remaining journey in approximately 21 seconds. Short transitions leave more time for each message.
- [x] Return to the opening via brand, scene selection, timeline Home or scrolling to the beginning.
- [x] Keyboard skip link follows the available destination; reduced-motion preference keeps manual scene navigation.
- [x] Standalone and production runtime regenerated from the same V6 source.

Marketing copy refinement (2026-10-24):
- [x] Replace generic ambition and tutorial commands with the merchant task and its concrete result.
- [x] State the category in the opening description: an ecommerce site with products, orders and customer information in one panel.
- [x] Give each scene a distinct purpose: product preparation, owned storefront, order details, preparation/shipping status, customer information and registration.
- [x] Name demo controls by the screen they open; distinguish the presentation, interactive demo and registration destination.
- [x] Align navigation, supporting panels, FAQ and TR metadata; fix the malformed customer FAQ wording.
- [x] Keep merchant perspective. Describe order status updates, without claiming carrier tracking or shipping integrations.
- [x] Keep verified demo functionality and controls. No price, trial duration, conversion lift, customer-count or performance claims added.
- [x] Browser checks on desktop 1280×720 and mobile 390×844: new opening, product scene, long headings and demo CTA. Production build and script/structure validation passed.

Research and reasoning (official pages retrieved 2026-10-24):
- https://www.shopify.com/tr/start — connect the store/product/payment journey with concrete next steps; adapt the structure, not Shopify copy or payment promises.
- https://ikas.com/tr/ikas-nasil-kullanilir — explain product setup through merchant tasks and visible fields.
- https://www.wix.com/ecommerce/online-store — identify the category and brand-owned store before listing management features.
- https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/ — concise, scannable and concrete wording; no usability-study numbers repurposed as Celebix performance claims.
- Celebix feature claims checked against the existing source and current interactive demo. The live Celebix and registration URLs were not accessible through the web-retrieval service; this copy does not assert unverified live integrations.

Production handoff (2026-10-24):
- [x] Verify revised copy is rendered by the real Next.js route, not only the standalone prototype.
- [x] Share TR title/description across document, Open Graph and Twitter metadata; prevent fallback to generic corporate/AI copy.
- [x] Include the 16 integration files in source/ inside the delivery archive, alongside the baseline-checked patch.

Production source reconciliation (2026-10-24):
- [x] Confirm Coolify application a8gcwoggwo8ggck40sc04c4o serves celebix.net from Webintoshi/celebix main.
- [x] Preserve the published privacy page from production commit 55369e5f8da743d2805a60ae916d985dc3d62d9d. It had diverged from main and must not be lost in this release.
- [x] Validate the combined release: production build passed and five lifecycle checks passed.
- [x] Transfer the implementation through the authenticated GitHub web interface; connector write requests are restricted.
