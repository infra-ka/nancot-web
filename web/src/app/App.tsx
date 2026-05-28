import { ShoppingCart } from "lucide-react";
import { useMemo, useState } from "react";
import { CameraPermissionModal } from "../common-lib/components/CameraPermissionModal/CameraPermissionModal";
import { CartDrawer } from "../common-lib/components/CartDrawer/CartDrawer";
import { CategorySection } from "../common-lib/components/CategorySection/CategorySection";
import { CheckoutModal } from "../common-lib/components/CheckoutModal/CheckoutModal";
import { CyberButton } from "../common-lib/components/CyberButton/CyberButton";
import { ImagePreviewModal } from "../common-lib/components/ImagePreviewModal/ImagePreviewModal";
import { NeonPanel } from "../common-lib/components/NeonPanel/NeonPanel";
import { ProductModal } from "../common-lib/components/ProductModal/ProductModal";
import { useCart } from "../common-lib/hooks/useCart";
import { useI18n } from "../common-lib/i18n/I18nProvider";
import { localeOptions, LocaleCode } from "../common-lib/i18n/locales";
import { MenuCategory, MenuItem } from "../common-lib/types/menu";
import { formatCurrency } from "../common-lib/utils/format";

const categories: MenuCategory[] = ["subs", "chopes", "cafe", "bebidas"];

export default function App() {
  const { locale, menu, messages, setLocale } = useI18n();
  const cart = useCart();
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [physicalQrStatus, setPhysicalQrStatus] = useState<string | undefined>();

  const itemsByCategory = useMemo(
    () =>
      categories.map((category) => ({
        category,
        title: messages.categories[category],
        items: menu.filter((item) => item.category === category)
      })),
    [menu, messages]
  );

  function addProduct(quantity: number, selectedOptions?: Record<string, string>) {
    if (!selectedProduct) return;

    cart.addItem({
      menuItemId: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity,
      selectedOptions
    });
  }

  return (
    <main className="app-shell">
      <header className="hero-panel">
        <div className="hero-panel__sandwich" aria-hidden="true">
          🥖
        </div>
        <div className="hero-panel__title-lockup">
          <h1>
            <span>JANELINHA</span>
            <span>SUBS</span>
          </h1>
          <p>{messages.app.subtitle}</p>
        </div>
        <div className="hero-panel__tools">
          <button className="hero-panel__image-button" onClick={() => setIsImagePreviewOpen(true)} type="button">
            <img
              alt={messages.app.imageAlt}
              className="hero-panel__reference"
              src="/assets/janelinha-menu-reference.jpeg"
            />
            <span className="hero-panel__image-action">{messages.app.imageOpen}</span>
          </button>
          <label className="language-select">
            <span>{messages.app.languageLabel}</span>
            <select value={locale} onChange={(event) => setLocale(event.target.value as LocaleCode)}>
              {localeOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <span className="hero-panel__badge">{messages.app.badge}</span>
      </header>

      <NeonPanel variant="green" className="mission-panel">
        <p>{messages.mission.label}</p>
        <strong>{messages.mission.text}</strong>
      </NeonPanel>

      {itemsByCategory.map(({ category, title, items }) => (
        <CategorySection category={category} items={items} key={category} onSelect={setSelectedProduct} title={title} />
      ))}

      <CyberButton className="floating-cart" onClick={() => setIsCartOpen(true)} aria-label={messages.app.openCart}>
        <ShoppingCart size={19} />
        {cart.items.length} · {formatCurrency(cart.subtotal)}
      </CyberButton>

      {selectedProduct ? (
        <ProductModal
          item={selectedProduct}
          onAddToOrder={addProduct}
          onClose={() => setSelectedProduct(null)}
          onNextStep={() => {
            setSelectedProduct(null);
            setIsCartOpen(true);
          }}
        />
      ) : null}

      {isCartOpen ? (
        <CartDrawer
          items={cart.items}
          onClose={() => setIsCartOpen(false)}
          onFinishOrder={() => {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          }}
          onRemoveItem={cart.removeItem}
          onUpdateQuantity={cart.updateQuantity}
          subtotal={cart.subtotal}
        />
      ) : null}

      {isCheckoutOpen ? (
        <CheckoutModal
          items={cart.items}
          onClose={() => setIsCheckoutOpen(false)}
          onConfirmed={cart.clearCart}
          onOpenCamera={() => setIsCameraOpen(true)}
          physicalQrStatus={physicalQrStatus}
          subtotal={cart.subtotal}
        />
      ) : null}

      {isCameraOpen ? (
        <CameraPermissionModal
          onClose={() => setIsCameraOpen(false)}
          onDetected={() => {
            setIsCameraOpen(false);
            setPhysicalQrStatus(messages.app.physicalQrDetected);
          }}
        />
      ) : null}

      {isImagePreviewOpen ? (
        <ImagePreviewModal
          alt={messages.app.imageAlt}
          onClose={() => setIsImagePreviewOpen(false)}
          src="/assets/janelinha-menu-reference.jpeg"
        />
      ) : null}
    </main>
  );
}
