import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { MenuItem } from "../../types/menu";
import { formatCurrency } from "../../utils/format";
import { CyberButton } from "../CyberButton/CyberButton";
import { ItemImage } from "../ItemImage/ItemImage";
import "./ProductModal.css";

type ProductModalProps = {
  item: MenuItem;
  onClose: () => void;
  onAddToOrder: (quantity: number, selectedOptions?: Record<string, string>) => void;
  onNextStep: () => void;
};

export function ProductModal({ item, onClose, onAddToOrder, onNextStep }: ProductModalProps) {
  const { messages } = useI18n();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() =>
    Object.fromEntries(item.options?.map((group) => [group.id, group.options[0]]) ?? [])
  );

  const total = useMemo(() => item.price * quantity, [item.price, quantity]);

  function handleAdd() {
    // TODO: integrate Nancot-Gloves haptic feedback here
    onAddToOrder(quantity, selectedOptions);
    setAdded(true);
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section aria-modal="true" className="product-modal" role="dialog" aria-label={item.name}>
        <button className="modal-close haptic-target haptic-target--danger" onClick={onClose} aria-label={messages.product.closeModal}>
          <X size={20} />
        </button>
        <div className="product-modal__main" aria-hidden="true">
          <ItemImage alt={item.name} assetId={item.imageAssetId} fallbackEmoji={item.imageEmoji} size="modal" />
        </div>
        <p className="product-modal__eyebrow">{messages.product.customizeOrder}</p>
        <h2>{item.name}</h2>
        <p className="product-modal__description">{item.description}</p>
        <strong className="product-modal__price">{formatCurrency(item.price)}</strong>

        {item.options?.map((group) => (
          <fieldset className="product-modal__options" key={group.id}>
            <legend>{group.label}</legend>
            <div className="product-modal__option-grid">
              {group.options.map((option) => (
                <label
                  className={`option-chip haptic-target ${
                    selectedOptions[group.id] === option ? "haptic-target--selected option-chip--selected" : ""
                  }`}
                  key={option}
                >
                  <input
                    checked={selectedOptions[group.id] === option}
                    name={group.id}
                    onChange={() => {
                      // TODO: integrate Nancot-Gloves haptic feedback here
                      setSelectedOptions((current) => ({ ...current, [group.id]: option }));
                    }}
                    type="radio"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <div className="quantity-row">
          <span>{messages.product.quantity}</span>
          <div className="quantity-row__controls">
            <CyberButton aria-label={messages.product.decreaseQuantity} onClick={() => setQuantity((value) => Math.max(1, value - 1))} variant="ghost">
              -
            </CyberButton>
            <strong>{quantity}</strong>
            <CyberButton aria-label={messages.product.increaseQuantity} onClick={() => setQuantity((value) => value + 1)} variant="ghost">
              +
            </CyberButton>
          </div>
        </div>

        <div className="product-modal__actions">
          <CyberButton onClick={handleAdd} className="haptic-target--confirm">
            {messages.product.addToOrder} · {formatCurrency(total)}
          </CyberButton>
          {added ? (
            <CyberButton onClick={onNextStep} variant="secondary">
              {messages.product.nextStep}
            </CyberButton>
          ) : null}
        </div>
      </section>
    </div>
  );
}
