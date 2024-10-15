import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import { vi } from "vitest";
import { describe, it, test, expect, skip, afterEach } from "vitest";
import { CartProvider } from "../src/components/CartContext";
import "@testing-library/jest-dom";

it("test", async () => {
  const out = await App();
});
