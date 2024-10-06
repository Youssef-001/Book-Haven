import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import { House } from "lucide-react";
import styled from "styled-components";
import { useCart } from "./CartContext"; // Import useCart context
import { Button, ButtonGroup } from "@chakra-ui/react";
let HomeButton = styled.button`
  all: unset;
  margin-left: auto;
  margin-right: 1rem;
`;

let Container = styled.div`
  padding: 3rem 10rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
`;

let Head = styled.h1`
  font-family: Helvetica;
  text-align: center;
`;

let BookTitle = styled.p`
  font-size: 1.5rem;
  font-family: Helvetica;
  font-weight: 500;
`;

let BookDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 3px solid grey;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

let CartButton = styled.button`
  background-color: black;
  color: white;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 9px;
  width: 100%;
  cursor: pointer;
`;

let PriceCheck = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: Helvetica;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function CartPage() {
  const location = useLocation();
  const { cart, setCart } = useCart();
  console.log("here", cart);

  function getTotalPrice() {
    let price = cart.reduce((prev, nex) => {
      let price = nex.price.replace("$", "");
      let quant = nex.quantity;
      return prev + parseInt(price) * parseInt(quant);
    }, 0);

    return price;
  }

  function handleDelete(title) {
    let newCart = cart.filter((book) => book.title !== title);
    setCart(newCart);
    console.log(cart);
    console.log(newCart);
  }

  if (cart) {
    return (
      <>
        <Header>
          <HomeButton>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <House size="48px" />
            </Link>
          </HomeButton>
        </Header>

        <Head>Your cart - {cart.length} items</Head>

        <Container>
          <BookDiv>
            <h2>Book</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
          </BookDiv>
          {cart.map((c) => (
            <BookDiv key={c.title}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  gridColumn: "1/2",
                }}
              >
                <img src={c.img}></img>
                <BookTitle>{c.title}</BookTitle>
              </div>
              <h3 style={{ gridColumn: "2/3" }}>{c.price}</h3>
              <h3 style={{ gridColumn: "3/4" }}>{c.quantity}</h3>
              <CartButton onClick={() => handleDelete(c.title)}>
                Delete
              </CartButton>
            </BookDiv>
          ))}

          <div
            id="checkout"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <PriceCheck>
              <span>Total price</span>

              <span style={{}}>{getTotalPrice()}$</span>
              <CartButton style={{}}>Checkout</CartButton>
            </PriceCheck>
          </div>
        </Container>
      </>
    );
  }
}

export default CartPage;
