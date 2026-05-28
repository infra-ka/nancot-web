import { ShoppingCart } from "lucide-react";
import { useMemo, useState } from "react";
import { CameraPermissionModal } from "../common-lib/components/CameraPermissionModal/CameraPermissionModal";
import { CartDrawer } from "../common-lib/components/CartDrawer/CartDrawer";
import { CategorySection } from "../common-lib/components/CategorySection/CategorySection";
import { CheckoutModal } from "../common-lib/components/CheckoutModal/CheckoutModal";
import { CyberButton } from "../common-lib/components/CyberButton/CyberButton";
import { NeonPanel } from "../common-lib/components/NeonPanel/NeonPanel";
import { ProductModal } from "../common-lib/components/ProductModal/ProductModal";
import { categoryLabels, janelinhaMenu } from "../common-lib/data/janelinhaMenu";
import { useCart } from "../common-lib/hooks/useCart";
import { MenuCategory, MenuItem } from "../common-lib/types/menu";
import { formatCurrency } from "../common-lib/utils/format";

const categories: MenuCategory[] = ["subs", "chopes", "cafe", "bebidas"];

export default function App() {
  const cart = useCart();
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [physicalQrStatus, setPhysicalQrStatus] = useState<string | undefined>();

  const itemsByCategory = useMemo(
    () =>
      categories.map((category) => ({
        category,
        title: categoryLabels[category],
        items: janelinhaMenu.filter((item) => item.category === category)
      })),
    []
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
        <div>
          <h1>JANELINHA SUBS</h1>
          <p>CHOPE E CAFÉ</p>
        </div>
        <img
          alt="Neon Janelinha Subs menu reference"
          className="hero-panel__reference"
          src="/assets/janelinha-menu-reference.jpeg"
        />
        <span>Nancot Web Menu v1</span>
      </header>

      <NeonPanel variant="green" className="mission-panel">
        <p>Active mission</p>
        <strong>Live the purpose. Make a difference. Share love.</strong>
      </NeonPanel>

      {itemsByCategory.map(({ category, title, items }) => (
        <CategorySection category={category} items={items} key={category} onSelect={setSelectedProduct} title={title} />
      ))}

      <CyberButton className="floating-cart" onClick={() => setIsCartOpen(true)} aria-label="Open cart">
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
            setPhysicalQrStatus("Physical QR Code detected — payment pending confirmation.");
          }}
        />
      ) : null}
    </main>
  );
}
