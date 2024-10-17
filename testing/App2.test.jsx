import { render, screen, waitFor } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "../src/App";
import { CartProvider } from "../src/components/CartContext"; // Assuming you have a CartProvider to wrap your component
import useBooks from "../src/components/GetBooks";
import { describe, beforeEach, it, expect, vi } from "vitest";

// Mocking the useBooks hook
vi.mock("../src/components/GetBooks");

describe("App Component", () => {
  beforeEach(() => {
    // Reset the mock before each test
    vi.clearAllMocks();
  });

  test("renders loading indicator when loading", () => {
    // Mock the useBooks to set loading state
    useBooks.mockReturnValue([[], true]); // Return loading state as true

    render(
      <ChakraProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    );

    const loadingIndicator = screen.getByTestId("loading");
    expect(loadingIndicator).toBeInTheDocument();
  });

  test("renders books when loading is complete", async () => {
    // Mock the useBooks to simulate fetching books
    const mockBooks = [
      { id: 1, volumeInfo: { title: "Book 1" } },
      { id: 2, volumeInfo: { title: "Book 2" } },
    ];
    useBooks.mockReturnValue([mockBooks, false]); // Return books and loading state as false

    render(
      <ChakraProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    );

    // Wait for books to be displayed
    await waitFor(() => {
      expect(screen.getByText("Book 1")).toBeInTheDocument();
      expect(screen.getByText("Book 2")).toBeInTheDocument();
    });
  });

  test("renders Cart component", async () => {
    const mockBooks = [{ id: 1, volumeInfo: { title: "Book 1" } }];
    useBooks.mockReturnValue([mockBooks, false]); // Return books and loading state as false

    render(
      <ChakraProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    );

    await waitFor(() => {
      const cartElement = screen.getByText("Book 1"); // Update with actual button name
      expect(cartElement).toBeInTheDocument();
    });
  });
});
