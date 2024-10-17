import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import { vi } from "vitest";
import {
  describe,
  it,
  test,
  expect,
  skip,
  afterEach,
  beforeEach,
} from "vitest";
import { CartProvider } from "../src/components/CartContext";
import "@testing-library/jest-dom";

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          items: [
            {
              volumeInfo: {
                title: "Harry Potter", // Ensure this title matches exactly
              },
            },
            {
              volumeInfo: {
                title: "The Hobbit",
              },
            },
          ],
        }),
    })
  );
});
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
    // fetch.mockResolvedValueOnce({
    //   json: vi.fn().mockResolvedValueOnce(mockData),
    // });

    render(
      <CartProvider>
        <App />
      </CartProvider>
    );

    const bookElement = await screen.findByText(
      "Harry Potter",
      {},
      { timeout: 5000 }
    );
    expect(bookElement).toBeInTheDocument();
  });
});
