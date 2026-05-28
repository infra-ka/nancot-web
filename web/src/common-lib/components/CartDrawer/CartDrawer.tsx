import { ShoppingBag, Trash2, X } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";
import { CartItem } from "../../types/cart";
import { formatCurrency } from "../../utils/format";
import { CyberButton } from "../CyberButton/CyberButton";
import "./CartDrawer.css";

type CartDrawerProps = {
  items: CartItem[];
  subtotal: number;
  onClose: () => void;
  onFinishOrder: () => void;
  onRemoveItem: (cartItemId: string) => void;
  onUpdateQuantity: (cartItemId: string, quantity: number) => void;
};

export function CartDrawer({
  items,
  subtotal,
  onClose,
  onFinishOrder,
  onRemoveItem,
  onUpdateQuantity
}: CartDrawerProps) {
  const { messages } = useI18n();

  return (
    <div className="cart-backdrop" role="presentation">
      <aside aria-modal="true" aria-label={messages.cart.title} className="cart-drawer" role="dialog">
        <button className="modal-close haptic-target haptic-target--danger" onClick={onClose} aria-label={messages.cart.close}>
          <X size={20} />
        </button>
        <h2>
          <ShoppingBag size={24} /> {messages.cart.title}
        </h2>
        {items.length === 0 ? (
          <p className="cart-drawer__empty">{messages.cart.empty}</p>
        ) : (
          <div className="cart-drawer__items">
            {items.map((item) => (
              <article className="cart-item" key={item.cartItemId}>
                <div>
                  <h3>{item.name}</h3>
                  {item.selectedOptions ? (
                    <p>{Object.values(item.selectedOptions).join(", ")}</p>
                  ) : null}
                  <strong>{formatCurrency(item.price)}</strong>
                </div>
                <div className="cart-item__controls">
                  <CyberButton
                    aria-label={`${messages.cart.decrease} ${item.name}`}
                    onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                    variant="ghost"
                  >
                    -
                  </CyberButton>
                  <span>{item.quantity}</span>
                  <CyberButton
                    aria-label={`${messages.cart.increase} ${item.name}`}
                    onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                    variant="ghost"
                  >
                    +
                  </CyberButton>
                  <button
                    aria-label={`${messages.cart.remove} ${item.name}`}
                    className="cart-item__remove haptic-target haptic-target--danger"
                    onClick={() => onRemoveItem(item.cartItemId)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="cart-drawer__total">
          <span>{messages.cart.subtotal}</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
        <CyberButton disabled={items.length === 0} onClick={onFinishOrder} className="haptic-target--confirm">
          {messages.cart.finishOrder}
        </CyberButton>
      </aside>
    </div>
  );
}
