import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartPage from "./components/CartPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { CartProvider } from "./components/CartContext.jsx"; // Import your CartProvider
import { ChakraProvider } from "@chakra-ui/react";
import Page404 from "./components/Page404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },

  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
