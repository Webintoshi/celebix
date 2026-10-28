# Direct Toshi Test Implementation Plan

> **For agentic workers:** Execute the scoped tasks in parallel; root alone owns releases.

**Goal:** Buy the one-credit, VAT-inclusive 1 TL test product without panel login.
**Architecture:** Public store-address form creates a private guest-test quote through the signed server bridge, then reuses existing checkout and verified settlement.
**Tech Stack:** Next.js, TypeScript, PostgreSQL16, iyzico hosted checkout.
**Spec:** `docs/superpowers/specs/2026-10-28-toshi-public-test-design.md`

## Constraints and review focus

- Only `toshi-test-1`, net83/VAT17/total100; no client price, identity or role input.
- No auth changes, fake membership, payment automation, historical order rewrite or credit before verified settlement.
- Test invalid/expired/tampered capabilities, wrong origins, duplicate form fields, unknown stores, cross-browser replay, rate limits, wrong amounts and concurrent callbacks.

## Tasks

- [ ] Backend: red native SQL/service tests; additive private guest creation and narrow actor guards; green tests and exact signup release guard.
- [ ] Public HTTP: red capability/origin/normalization/idempotency tests; fixed bridge action and session cookie; green existing checkout tests.
- [ ] UI: red public entry/catalog tests; store address only, then existing checkout; preserve terms, billing and other products.
- [ ] Review, production builds, source-bound proof and bounded additive migration.
- [ ] Sequential OWNER NET→SITE, then MAIN; verify running sources and anonymous public flow to Ezmeo billing without charging.
