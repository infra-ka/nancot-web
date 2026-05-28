import { itemImageAssets } from "../../assets/item-images";
import "./ItemImage.css";

type ItemImageProps = {
  assetId?: string;
  alt: string;
  fallbackEmoji?: string;
  size?: "card" | "modal";
};

export function ItemImage({ assetId, alt, fallbackEmoji, size = "card" }: ItemImageProps) {
  const src = assetId ? itemImageAssets[assetId] : undefined;

  if (!src) {
    return (
      <span aria-label={alt} className={`item-image item-image--${size} item-image--fallback`} role="img">
        {fallbackEmoji}
      </span>
    );
  }

  return <img alt={alt} className={`item-image item-image--${size}`} src={src} />;
}
