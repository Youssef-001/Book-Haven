import styled from "styled-components";
import "./App.css";
// import { Sidebar } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Books from "./components/Books";
import Nav from "./components/Nav";
import Preview from "./components/Preview";
import Header from "./components/Header";
import { useCart } from "./components/CartContext"; // Import useCart context
import { ChakraProvider } from "@chakra-ui/react";
import { CircularProgress, Box } from "@chakra-ui/react";
import useBooks from "./components/GetBooks";
let Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto 1fr;
  opacity: ${(props) => (props.isCartPreviewVisible ? 0.3 : 1)};
`;

function App() {
  let [filter, setFilter] = useState("fiction");
  let [books, setBooks] = useState([]);
  let [preview, setPreview] = useState("");
  let { cart, setCart } = useCart();
  const [isCartPreviewVisible, setCartPreviewVisible] = useState(false);
  let [loading, setLoading] = useState(true);

  useBooks(filter, setLoading, setBooks);

  if (loading) {
    return (
      <ChakraProvider>
        <Header>
          <Cart
            cart={cart}
            setCartPreviewVisible={setCartPreviewVisible}
            isCartPreviewVisible={isCartPreviewVisible}
            setCart={setCart}
          />
        </Header>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <CircularProgress
            data-testid="loading"
            isIndeterminate
            color="rgb(31, 41, 55)"
          />
        </Box>
      </ChakraProvider>
    );
  }

  if (books.length > 0)
    return (
      <>
        <Header>
          <Cart
            cart={cart}
            setCartPreviewVisible={setCartPreviewVisible}
            isCartPreviewVisible={isCartPreviewVisible}
            setCart={setCart}
          />
        </Header>
        <Layout id="app" isCartPreviewVisible={isCartPreviewVisible}>
          <Nav setFilter={setFilter}></Nav>
          <Books
            setPreview={setPreview}
            books={books}
            cart={cart}
            setCart={setCart}
          />
        </Layout>
      </>
    );
}

export default App;
