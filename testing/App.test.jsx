import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import { vi } from "vitest";
import { describe, it, test, expect, afterEach } from "vitest";
import { CartProvider } from "../src/components/CartContext";
import "@testing-library/jest-dom";
global.fetch = vi.fn();
describe("test", () => {
  afterEach(() => {
    vi.clearAllMocks(); // Clear mocks after each test
  });

  test("renders loading initially and then displays fetched data", async () => {
    // Mocking a successful fetch response
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: "Hello, World!" }),
      })
    );

    render(
      <CartProvider>
        <App />
      </CartProvider>
    );

    // Check for loading message
    expect(screen.getByTestId(/loading/i)).toBeInTheDocument();

    // Wait for the data to be fetched and displayed
  });
});
