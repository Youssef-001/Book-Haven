import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import App from "../src/App";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("Renders brand name", () => {
    render(<Header />);
    let brand = screen.getByTestId("brand");
    expect(brand).toBeInTheDocument();
  });

  it("Renders the logo", () => {
    render(<Header />);
    let logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("Renders cart icon", () => {
    render(
      <Header>
        <Cart />
      </Header>
    );
    let cartLogo = screen.getByTestId("CartIcon");
    expect(cartLogo).toBeInTheDocument();
  });

  it("Renders Cart counter", () => {
    render(
      <Header>
        <Cart />
      </Header>
    );

    let cartCounter = screen.getByTestId("cartCounter");
    expect(cartCounter).toBeInTheDocument();
  });

  // TODO
  // it("Test for Add to cart", () => {
  //   render(<App  />);
  //   let addButton = screen.getByRole("button", { name: "Add to cart" });
  //   expect(addButton).toBeInTheDocument();
  // });
});
