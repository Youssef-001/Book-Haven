import Header from "../src/components/Header";
import Books from "../src/components/Books";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Book from "../src/components/Book";
import "@testing-library/jest-dom";
import Cart from "../src/components/Cart";

it("Test for rendering book", () => {
  let cart = [];
  let testBook = {
    volumeInfo: {
      imageLinks: {
        thumbnail:
          "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
      },

      title: "Harry potter",
      authors: "Someone",
    },
  };
  function setCart(c) {
    cart = c;
  }
  localStorage.setItem(
    "Harry potter",
    JSON.stringify({
      price: "33",
    })
  );

  render(<Book cart={cart} setCart={setCart} book={testBook} />);

  let bookTitle = screen.getByText("Harry potter");
  let bookAuthor = screen.getByText("Someone");
  let bookCover = screen.getByRole("img");
  let addButton = screen.getByTestId("add-button");
  let bookPrice = screen.getByTestId("book-price");

  expect(bookTitle).toBeInTheDocument();
  expect(bookAuthor).toBeInTheDocument();
  expect(bookCover).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(bookPrice).toBeInTheDocument();
});

it("Test to add book", () => {
  render(
    <Header>
      <Cart></Cart>
    </Header>
  );

  let cart = screen.getByText("Cart (0)");
  expect(cart).toBeInTheDocument();
});
