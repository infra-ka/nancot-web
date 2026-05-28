import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useCart } from "../src/common-lib/hooks/useCart";

describe("useCart", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("adds items, calculates subtotal, updates quantity, and removes items", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem({
        menuItemId: "italian-sub",
        name: "Italian Sub",
        price: 28.9,
        quantity: 1,
        selectedOptions: { sauce: "Pesto" }
      });
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.subtotal).toBe(28.9);

    const cartItemId = result.current.items[0].cartItemId;

    act(() => {
      result.current.updateQuantity(cartItemId, 3);
    });

    expect(result.current.subtotal).toBe(86.7);

    act(() => {
      result.current.removeItem(cartItemId);
    });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.subtotal).toBe(0);
  });

  it("persists cart items in localStorage", () => {
    const { result, rerender } = renderHook(() => useCart());

    act(() => {
      result.current.addItem({
        menuItemId: "weiss",
        name: "Weiss",
        price: 14.9,
        quantity: 2
      });
    });

    rerender();

    expect(JSON.parse(localStorage.getItem("nancot:janelinha-cart") ?? "[]")).toHaveLength(1);
    expect(result.current.subtotal).toBe(29.8);
  });
});
