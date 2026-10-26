# Platform Checkout Design Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans.

**Goal:** Show a branded checkout with product imagery and unmistakable store assignment.
**Architecture:** Update the server-rendered view and local product assets only; preserve every payment handler/contract.
**Tech Stack:** Next.js14, React18, Tailwind3.
**Spec:** docs/superpowers/specs/2026-10-27-platform-checkout-design.md

## Global Constraints
No schema, gateway, quote, credential, charge or other shared app changes. Only Ezmeo live QA. Main build required.

## Review Focus
Long Turkish store/product names wrap; unknown offers retain correct category art; mobile shows store and amounts; non-approved states make no activation claim; every original input/action/constraint remains.

### Task1: Checkout presentation
- [x] Add focused SSR assertions for explicit store assignment, local product artwork by kind and approved-store confirmation; observe RED.
- [x] Refactor components/platform-checkout/CheckoutView.tsx into private header/store/form/summary/status pieces; add local package/tool art under public/payments. Keep form field names and handlers unchanged.
- [x] Run all tests and typecheck, build sequentially.

### Task2: Visual and release verification
- [x] Inspect desktop and mobile render of real component using a local read-only fixture; compare against concept, record deviations.
- [ ] Independent diff review, commit clean candidate.
- [ ] Publish Main only with canonical lock, idle queue, source/config/env/native immutable witnesses, restore main/HEAD/automatic deployment.
- [ ] Verify existing Ezmeo checkout and reload without submitting buyer/payment data; save screenshot.

## Execution ledger
- Existing isolated Main checkout reused at cc4; baseline33/33 tests. Two new customer-facing assertions observed RED, then GREEN. Final35/35 + TypeScript + production build passed; final log SHA7afecbf37e6c0162ffe83dc83222d81ea19188fa15985ac72fa25bd3812ee9a8.
- No backend or form contract changes. Independent review found a long-name mobile grid risk; min-width and anywhere wrapping fixed.320px/144-character unbroken store name and128-character product title: scrollWidth320, overflow0.
- IAB rendered production component/CSS at1402×1122 (concept native size),390×844,320×844. Compared copy, palette, form hierarchy, control geometry, product framing and spacing. Actual submit with empty local form focused email and sent nothing; all local POST routes disabled. Approved-only status appears before mobile summary (top167 versus664.75), no form.
- Intentional deviations from generated concept: production max-width1240; real generated art88px rather than mockup oversized thumbnail; existing legal consent wording and E.164 phone format retained; country stays text, not an invented select; no fabricated iyzico wordmark; footer points to existing legal route. Longer real form determines full-page height. Main implementation matches this final specification; no visual blocker found.
- First build failed because an external cleanup emptied the old task-owned dependency directory while the build ran. Original logs retained. Recreated exact lockfile dependencies in a dedicated ignored task directory; final sequential build passed.

## Asset provenance
Built-in image_gen used. Original concept: /Users/Celebix/.codex/generated_images/01a0d926-871c-7c02-83fd-cc33a0fa8f12/exec-aa44384e-63c0-4ee8-8359-7e0dddf32ec6.png. Product originals exec-fdc1fbfc-17ee-4a42-b575-621a11f4f21d.png (tools) and exec-4123c632-af33-4001-9d73-360fb5fd201e.png (package), same directory. Optimized project assets public/payments/celebix-tools.jpg (34KB), celebix-package.jpg (31KB). Prompts specified premium square matte-black Celebix software boxes, orange#FF6B00 storefront/tool tiles, neutral studio background, no additional text/numbers or watermark. No model-generated interface screenshot is shipped as UI.
