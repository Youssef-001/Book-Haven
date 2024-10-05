import styled from "styled-components";
import "./App.css";
// import { Sidebar } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Books from "./components/Books";
import Nav from "./components/Nav";
import Preview from "./components/Preview";
const API_KEY = "AIzaSyBdakqptVcy0KOcQZ4pnp0vO6ME1DU54YI";
import Header from "./components/Header";
import { useCart } from "./components/CartContext"; // Import useCart context
import { ChakraProvider } from "@chakra-ui/react";
import { CircularProgress, Box } from "@chakra-ui/react";
let Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto 1fr;
  opacity: ${(props) => (props.isCartPreviewVisible ? 0.3 : 1)};
  /* z-index: 1; */
  /* position: relative; */
`;

function getRandomNumber() {
  const min = 19;
  const max = 35;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  let [filter, setFilter] = useState("fiction");
  let [books, setBooks] = useState("");
  let [preview, setPreview] = useState("");
  // let [cart, setCart] = useState([]);
  let { cart, setCart } = useCart();
  const [isCartPreviewVisible, setCartPreviewVisible] = useState(false);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${filter}&orderBy=relevance&maxResults=40&key=${API_KEY}`
      );

      let data = await res.json();

      setBooks(data.items);
      setLoading(false);
      data.items.forEach((vol) => {
        let title = vol.volumeInfo.title;
        if (!localStorage.getItem(title)) {
          localStorage.setItem(
            title,
            JSON.stringify({
              price: getRandomNumber(),
              quantity: 1,
            })
          );
        }
      });
    };
    fetchData();
  }, [filter]);

  console.log(cart);

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
          <CircularProgress isIndeterminate color="rgb(31, 41, 55)" />
        </Box>
      </ChakraProvider>
    );
  }

  if (books != "")
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
