export type CartItem = {
  cartItemId: string;
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
};

export type NewCartItem = Omit<CartItem, "cartItemId">;
