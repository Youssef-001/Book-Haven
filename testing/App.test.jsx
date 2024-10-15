import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import { vi } from "vitest";
import { describe, it, test, expect, skip, afterEach } from "vitest";
import { CartProvider } from "../src/components/CartContext";
import "@testing-library/jest-dom";

global.fetch = vi.fn();

describe("App Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test.skip("renders loading initially and then displays fetched books", async () => {
    const mockData = {
      items: [
        {
          id: "1",
          volumeInfo: {
            imageLinks: {
              thumbnail:
                "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
            },
            title: "Harry Potter",
            authors: ["J.K. Rowling"],
          },
        },
        {
          id: "2",
          volumeInfo: {
            imageLinks: {
              thumbnail: "https://example.com/another-book-cover.jpg",
            },
            title: "Another Book",
            authors: ["John Doe"],
          },
        },
      ],
    };

    // Mock fetch to return the book data
    fetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    render(
      <CartProvider>
        <App />
      </CartProvider>
    );

    // Check for loading spinner initially
    expect(screen.getByTestId(/loading/i)).toBeInTheDocument();

    // Wait for the books to be fetched and displayed
    await waitFor(() =>
      expect(screen.getByText("Harry potter")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText("Another Book")).toBeInTheDocument()
    );
  });
});
