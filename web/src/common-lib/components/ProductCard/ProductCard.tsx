import { SlidersHorizontal } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";
import { MenuItem } from "../../types/menu";
import { formatCurrency } from "../../utils/format";
import { CyberButton } from "../CyberButton/CyberButton";
import "./ProductCard.css";

type ProductCardProps = {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
};

export function ProductCard({ item, onSelect }: ProductCardProps) {
  const { messages } = useI18n();

  return (
    <article className="product-card haptic-target" aria-label={item.name}>
      <div className="product-card__signal" aria-hidden="true">
        {item.imageEmoji}
      </div>
      <div className="product-card__content">
        <p className="product-card__category">{messages.categories[item.category]}</p>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="product-card__footer">
          <strong>{formatCurrency(item.price)}</strong>
          {item.options ? (
            <span className="product-card__customizable">
              <SlidersHorizontal size={16} /> {messages.product.customizable}
            </span>
          ) : null}
        </div>
      </div>
      <CyberButton aria-label={`${messages.product.selectAria} ${item.name}`} onClick={() => onSelect(item)}>
        {messages.product.select}
      </CyberButton>
    </article>
  );
}
