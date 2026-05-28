# Implementation Plan — Nancot Web Menu v1

## Project: `nancot-web-menu-v1`

Create a ReactJS single-page application for the interactive menu experience of **Janelinha Subs — Chope e Café**, inspired by the design of the attached `Janelinha_subs_restaurant_menu...jpeg` image.

The first version should behave like a **normal responsive web menu**, but with a design prepared for future adaptation into AR lens interfaces, haptic inputs, and Nancot-Gloves.

---

## 1. Application Objective

Build a clickable menu for a restaurant/cyber-café with:

* Neon/cyber visual style inspired by the Janelinha Subs artwork.
* Product cards organized by category.
* Modals with a close button and a next-step button.
* Simple cart.
* Mocked checkout.
* Simulated payment through:

  * Mocked PIX QR Code.
  * PIX copy-and-paste code.
  * Option to request system permission to open the camera from the web app and scan a physical QR Code.
  * Simulated debit/credit card payment, with no real payment gateway.

---

## 2. Suggested Stack

Use:

* ReactJS
* TypeScript
* Vite
* CSS Modules or plain CSS organized by component
* `lucide-react` for icons
* `qrcode.react` to generate the mocked PIX QR Code
* Local state with React hooks
* `localStorage` to temporarily persist the cart

Suggested initial commands:

```bash
cd C:\Projects\nancot
npm create vite@latest nancot-web-menu-v1 -- --template react-ts
cd nancot-web-menu-v1
npm install
npm install lucide-react qrcode.react
npm run dev
```

---

## 3. Folder Structure

Create the following structure:

```txt
src/
  app/
    App.tsx
    app.css

  common-lib/
    components/
      NeonPanel/
        NeonPanel.tsx
        NeonPanel.css

      ProductCard/
        ProductCard.tsx
        ProductCard.css

      ProductModal/
        ProductModal.tsx
        ProductModal.css

      CartDrawer/
        CartDrawer.tsx
        CartDrawer.css

      CheckoutModal/
        CheckoutModal.tsx
        CheckoutModal.css

      PixPaymentPanel/
        PixPaymentPanel.tsx
        PixPaymentPanel.css

      CameraPermissionModal/
        CameraPermissionModal.tsx
        CameraPermissionModal.css

      CyberButton/
        CyberButton.tsx
        CyberButton.css

      CategorySection/
        CategorySection.tsx
        CategorySection.css

    hooks/
      useCart.ts
      useCameraPermission.ts

    types/
      menu.ts
      cart.ts
      checkout.ts

    data/
      janelinhaMenu.ts

    theme/
      tokens.css
      neon-theme.css

  main.tsx
```

The `common-lib` folder should concentrate reusable components for future NancotPlatform establishments.

---

## 4. Visual Design

Follow the aesthetic of the reference image.

### Palette

Use CSS variables:

```css
:root {
  --color-bg: #02080b;
  --color-panel: rgba(3, 20, 24, 0.86);
  --color-cyan: #00f5ff;
  --color-green: #8dff5a;
  --color-yellow: #ffd84d;
  --color-orange: #ff9b32;
  --color-white: #f4ffff;
  --color-muted: #8db7bb;
  --color-danger: #ff4d6d;
}
```

### Style

The interface should include:

* Dark background with a subtle grid texture.
* Cyan neon borders.
* Green titles.
* Yellow/orange highlights for food and PIX elements.
* Cards with a holographic effect.
* Large, easy-to-click buttons.
* Comfortable spacing, considering future use with gestures and haptics.
* Mobile-first layout.

---

## 5. Menu Data

Create `src/common-lib/data/janelinhaMenu.ts`.

Main items:

### Subs

1. Italian Sub
   Ingredients:

* Salami
* Ham
* Pepperoni
* Provolone
* Lettuce
* Tomato
* Red onion
* Bell pepper
* Olive oil
* Oregano

Sauce options:

* Ranch
* Pesto
* Aioli

2. Philadelphia Sub Cheese Steak
   Ingredients:

* Sliced beef
* Bell peppers
* Onion
* Sub bread

Cheese choice:

* Swiss
* Cheddar
* Mozzarella

3. Chicken Parma
   Ingredients:

* Breaded chicken
* Marinara sauce
* Mozzarella
* Parmesan
* Oregano

### Draft Beers

* Weiss
* Pilsen
* IPA

### Coffee

* Cappuccino
* Filtered coffee

### Other Drinks

* Water
* Soda
* Juice

Each product should have:

```ts
type MenuItem = {
  id: string;
  category: "subs" | "chopes" | "cafe" | "bebidas";
  name: string;
  description: string;
  price: number;
  imageEmoji?: string;
  options?: MenuOptionGroup[];
};
```

---

## 6. Main Components

### `NeonPanel`

Base visual component for containers.

Props:

```ts
type NeonPanelProps = {
  title?: string;
  children: React.ReactNode;
  variant?: "cyan" | "green" | "yellow";
};
```

Use it for sections, modals, checkout, and cart.

---

### `ProductCard`

Clickable product card.

It should display:

* Name
* Category
* Short description
* Price
* Customization indicator when options are available
* “Select” button

When clicked, it should open `ProductModal`.

---

### `ProductModal`

Customization modal.

It should include:

* Close button in the top-right corner.
* Product name.
* Description.
* Base price.
* Selectable options, when available.
* Quantity control.
* “Add to order” button.
* “Next step” button after adding the item to the cart.

Rules:

* Italian Sub allows choosing one sauce: Ranch, Pesto, or Aioli.
* Philadelphia allows choosing one cheese: Swiss, Cheddar, or Mozzarella.
* Other items can be added directly.

---

### `CartDrawer`

Side cart or bottom modal on mobile.

It should contain:

* Item list.
* Quantity.
* Selected options.
* Unit price.
* Subtotal.
* Remove button.
* “Finish order” button.

Persist it in `localStorage`.

---

### `CheckoutModal`

Mocked checkout flow.

Steps:

1. Review order.
2. Choose payment method.
3. Mocked payment.
4. Confirmation.

Payment methods:

* PIX
* Credit card
* Debit card

For card payment, create a visual mocked form with:

* Printed name
* Card number
* Expiration date
* CVV

Do not integrate a real gateway.

After confirmation, show the screen:

`Order confirmed — protocol JSUBS-0001`

Generate a simple incremental number or timestamp.

---

### `PixPaymentPanel`

For mocked PIX, implement:

* QR Code generated with a fake string.
* “Copy PIX code” button.
* Visual field with copy-and-paste code.
* “I have paid” button.
* “Scan physical QR Code” button.

Mocked PIX code example:

```txt
00020126580014BR.GOV.BCB.PIX0136mock-janelinha-subs-nancot520400005303986540515.905802BR5925JANELINHA SUBS MOCK6008GOIANIA62070503***6304ABCD
```

When clicking “Copy PIX code”, use:

```ts
navigator.clipboard.writeText(mockPixCode)
```

Show visual feedback:

`PIX code copied.`

---

### `CameraPermissionModal`

Open this when the user clicks “Scan physical QR Code”.

Flow:

1. Explain that the app needs camera permission.
2. Button: “Allow camera”.
3. Use `navigator.mediaDevices.getUserMedia({ video: true })`.
4. Display the camera preview in a `<video>` element.
5. Simulate QR Code reading with a “Simulate QR Code read” button.
6. After simulation, return to checkout with the status:

`Physical QR Code detected — payment pending confirmation.`

Important:

* If the browser blocks or does not support the camera, show a friendly message.
* Stop the camera stream when closing the modal.
* Real QR Code reading is not required in this version.

---

## 7. `useCart` Hook

Create a hook to control:

* `items`
* `addItem`
* `removeItem`
* `updateQuantity`
* `clearCart`
* `subtotal`
* persistence in `localStorage`

Suggested type:

```ts
type CartItem = {
  cartItemId: string;
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
};
```

---

## 8. `useCameraPermission` Hook

Create a hook to:

* Request camera access.
* Store state as `idle | requesting | granted | denied | unsupported`.
* Return the stream.
* Stop the stream when the modal closes.

---

## 9. Page Layout

`App.tsx` should assemble the page like this:

1. Neon header:

   * Text logo: `JANELINHA SUBS`
   * Subtitle: `CHOPE E CAFÉ`
   * Badge: `Nancot Web Menu v1`

2. Mission panel:

   * `Active mission`
   * `Live the purpose. Make a difference. Share love.`

3. Sections:

   * Subs
   * Draft Beers
   * Coffee
   * Other Drinks

4. Fixed cart button:

   * Mobile: bottom-right corner.
   * Desktop: top-right corner or side area.

5. Product modal.

6. Cart drawer/modal.

7. Checkout modal.

---

## 10. Responsive Requirements

Mobile:

* One column.
* Large cards.
* Fixed cart button.
* Full-screen or almost full-screen modals.

Tablet:

* Two columns for products.

Desktop:

* Centered layout.
* Main panel with max width.
* Product grid with 2 or 3 columns.

---

## 11. Preparation for Future AR/Haptic Use

Even though this is a normal web app for now, prepare the UI with:

* Large buttons.
* Clear visual states:

  * default
  * hover
  * active
  * selected
  * disabled
* Class names compatible with future haptic actions:

```css
.haptic-target {}
.haptic-target--selected {}
.haptic-target--confirm {}
.haptic-target--danger {}
```

Add comments in the code indicating where to integrate haptic feedback in the future:

```ts
// TODO: integrate Nancot-Gloves haptic feedback here
```

Examples:

* When selecting an item.
* When adding an item to the cart.
* When confirming payment.
* When closing a modal.
* When detecting a physical QR Code.

---

## 12. Acceptance Criteria

The implementation is correct when:

* The application runs with `npm run dev`.
* The home page shows the Janelinha Subs menu with neon aesthetics.
* The user can click products.
* The user can choose sauce/cheese options.
* The user can add items to the cart.
* The cart calculates the subtotal correctly.
* The user can start checkout.
* The user can choose PIX.
* The system shows a mocked QR Code and PIX copy-and-paste code.
* The copy PIX button works.
* The user can open the camera flow for a physical QR Code.
* The browser requests camera permission.
* The camera stream closes correctly when exiting the modal.
* The user can simulate card payment.
* The final order shows mocked confirmation.
* Components are separated inside `common-lib`.

---

## 13. Recommended Implementation Order

1. Create the Vite React TypeScript project.
2. Create neon theme tokens.
3. Create TypeScript types.
4. Create the `janelinhaMenu.ts` data file.
5. Create `NeonPanel`.
6. Create `CyberButton`.
7. Create `ProductCard`.
8. Create the main layout in `App.tsx`.
9. Create `ProductModal`.
10. Create `useCart`.
11. Create `CartDrawer`.
12. Create `CheckoutModal`.
13. Create `PixPaymentPanel`.
14. Create `useCameraPermission`.
15. Create `CameraPermissionModal`.
16. Adjust responsiveness.
17. Review the visuals according to the reference image.
18. Test the full flow.

---

## 14. Important Notes

Do not implement real payment in this version.

Do not send data to a backend.

Do not create authentication.

Do not use a real gateway.

Do not store sensitive card data.

All checkout behavior must be simulated locally.

The focus is to validate:

* Menu UX.
* Janelinha Subs aesthetics.
* Component organization.
* Reusable foundation for other establishments.
* Visual preparation for the future NancotPlatform AR experience.
