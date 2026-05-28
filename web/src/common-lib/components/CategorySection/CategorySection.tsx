import { MenuCategory, MenuItem } from "../../types/menu";
import { NeonPanel } from "../NeonPanel/NeonPanel";
import { ProductCard } from "../ProductCard/ProductCard";
import "./CategorySection.css";

type CategorySectionProps = {
  title: string;
  category: MenuCategory;
  items: MenuItem[];
  onSelect: (item: MenuItem) => void;
};

export function CategorySection({ title, category, items, onSelect }: CategorySectionProps) {
  return (
    <NeonPanel title={title} className={`category-section category-section--${category}`}>
      <div className="category-section__grid">
        {items.map((item) => (
          <ProductCard item={item} key={item.id} onSelect={onSelect} />
        ))}
      </div>
    </NeonPanel>
  );
}
