export type MenuCategory = "subs" | "chopes" | "cafe" | "bebidas";

export type MenuOptionGroup = {
  id: string;
  label: string;
  required?: boolean;
  options: string[];
};

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  imageAssetId?: string;
  imageEmoji?: string;
  options?: MenuOptionGroup[];
};
