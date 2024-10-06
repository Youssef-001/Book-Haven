import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartPage from "./components/CartPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { CartProvider } from "./components/CartContext.jsx"; // Import your CartProvider
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
