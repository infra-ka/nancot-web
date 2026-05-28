import { useCallback, useEffect, useMemo, useState } from "react";
import { CartItem, NewCartItem } from "../types/cart";

const CART_STORAGE_KEY = "nancot:janelinha-cart";

function createCartItemId() {
  return crypto.randomUUID?.() ?? `cart-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function readStoredCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(readStoredCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: NewCartItem) => {
    // TODO: integrate Nancot-Gloves haptic feedback here
    setItems((current) => [...current, { ...item, cartItemId: createCartItemId() }]);
  }, []);

  const removeItem = useCallback((cartItemId: string) => {
    setItems((current) => current.filter((item) => item.cartItemId !== cartItemId));
  }, []);

  const updateQuantity = useCallback((cartItemId: string, quantity: number) => {
    setItems((current) =>
      current
        .map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const subtotal = useMemo(
    () => Math.round(items.reduce((total, item) => total + item.price * item.quantity, 0) * 100) / 100,
    [items]
  );

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal
  };
}
