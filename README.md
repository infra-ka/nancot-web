# Nancot Web Menu v1

React single-page menu experience for **Janelinha Subs — Chope e Café**, built as the first normal web version of a future NancotPlatform establishment interface.

The app lives in `web/` and is currently focused on dev-mode iteration with Vite live reload/HMR enabled.

## Project Overview

This version implements a neon/cyber restaurant menu inspired by the provided Janelinha Subs artwork:

- Responsive categorized menu for Subs, Draft Beers, Coffee, and Other Drinks.
- Product cards with customization modals and close/next-step controls.
- Simple cart with local `localStorage` persistence.
- Mock checkout with PIX, credit card, and debit card simulation.
- Mocked PIX QR code and copy-and-paste code.
- Camera permission flow prepared for simulated physical QR Code scanning.
- Reusable components under `web/src/common-lib` for future NancotPlatform establishments.
- UI class hooks for future haptic integration, including `.haptic-target` variants.

No real backend, authentication, or payment gateway is used in this version.

## Main Directories

```txt
web/
  src/
    app/
    common-lib/
  test/
  public/assets/
```

## Start Instructions

From the project root:

```bash
cd C:\Users\nanco\Projects\nancot\nancot-web-menu-v1\web
npm install
npm run dev
```

Open:

```txt
http://127.0.0.1:5173
```

## Live Reload

Vite live reload/HMR is enabled for development. The dev server is configured with polling so file changes in this Windows workspace are detected reliably.

Useful commands:

```bash
npm run dev
npm run dev:live
```

`npm run dev:live` uses a strict `5173` port so the browser URL stays stable during this session.

## Test Commands

Run the current Vitest suite from `web/`:

```bash
cd C:\Users\nanco\Projects\nancot\nancot-web-menu-v1\web
npm test
```

Run tests in watch mode while developing:

```bash
npm run test:watch
```

Current test coverage lives in `web/test` and covers:

- `useCart`: add item, remove item, quantity updates, subtotal math, and `localStorage` persistence.
- `createOrderProtocol`: deterministic UTC timestamp + establishment-name seeded protocol generation.
- `App` happy paths: customize Italian Sub, add to cart, reach PIX checkout, copy PIX code, simulate card payment, and show confirmation protocol.

Known test gaps for upcoming passes:

- Camera permission states and stream cleanup.
- Cart edge cases around multiple items and duplicate customizations.
- Debit card path.
- Modal close behavior and empty-cart checkout guard.
- Visual/responsive regression coverage.

## Current Development Note

We are prioritizing the dev build and browser iteration first. The TDD scaffolding exists in `web/test`, but full test/build hardening can continue after the dev experience and first UI pass are validated.
