import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../src/app/App";

describe("Janelinha menu app", () => {
  beforeEach(() => {
    localStorage.clear();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: vi.fn().mockResolvedValue(undefined)
      }
    });
  });

  it("lets a guest customize a sub, add it to cart, and start PIX checkout", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole("heading", { name: /JANELINHA SUBS/i })).toBeInTheDocument();
    expect(screen.getByText(/Live the purpose/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Select Italian Sub/i }));
    await user.click(screen.getByRole("radio", { name: /Pesto/i }));
    await user.click(screen.getByRole("button", { name: /Add to order/i }));
    await user.click(screen.getByRole("button", { name: /Next step/i }));

    const cart = screen.getByRole("dialog", { name: /Current order/i });
    expect(within(cart).getByText(/Italian Sub/i)).toBeInTheDocument();
    expect(within(cart).getByText(/Pesto/i)).toBeInTheDocument();

    await user.click(within(cart).getByRole("button", { name: /Finish order/i }));
    await user.click(screen.getByRole("button", { name: /PIX/i }));
    await user.click(screen.getByRole("button", { name: /Copy PIX code/i }));

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/PIX code copied/i)).toBeInTheDocument();
  });

  it("simulates card payment and shows a UTC hash based protocol", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Select Cappuccino/i }));
    await user.click(screen.getByRole("button", { name: /Add to order/i }));
    await user.click(screen.getByRole("button", { name: /Next step/i }));
    await user.click(screen.getByRole("button", { name: /Finish order/i }));
    await user.click(screen.getByRole("button", { name: /Credit card/i }));
    await user.type(screen.getByLabelText(/Printed name/i), "Nancot User");
    await user.type(screen.getByLabelText(/Card number/i), "4111111111111111");
    await user.type(screen.getByLabelText(/Expiration date/i), "12/30");
    await user.type(screen.getByLabelText(/CVV/i), "123");
    await user.click(screen.getByRole("button", { name: /Simulate card payment/i }));

    expect(screen.getByText(/Order confirmed/i)).toBeInTheDocument();
    expect(screen.getByText(/JSUBS-[A-Z0-9]{8}/i)).toBeInTheDocument();
  });
});
