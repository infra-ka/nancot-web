import { SlidersHorizontal } from "lucide-react";
import { categoryLabels } from "../../data/janelinhaMenu";
import { MenuItem } from "../../types/menu";
import { formatCurrency } from "../../utils/format";
import { CyberButton } from "../CyberButton/CyberButton";
import "./ProductCard.css";

type ProductCardProps = {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
};

export function ProductCard({ item, onSelect }: ProductCardProps) {
  return (
    <article className="product-card haptic-target" aria-label={item.name}>
      <div className="product-card__signal" aria-hidden="true">
        {item.imageEmoji}
      </div>
      <div className="product-card__content">
        <p className="product-card__category">{categoryLabels[item.category]}</p>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="product-card__footer">
          <strong>{formatCurrency(item.price)}</strong>
          {item.options ? (
            <span className="product-card__customizable">
              <SlidersHorizontal size={16} /> Customizable
            </span>
          ) : null}
        </div>
      </div>
      <CyberButton aria-label={`Select ${item.name}`} onClick={() => onSelect(item)}>
        Select
      </CyberButton>
    </article>
  );
}
