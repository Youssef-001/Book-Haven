import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import { House } from "lucide-react";
import styled from "styled-components";
import { useCart } from "./CartContext"; // Import useCart context

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

function CartPage() {
  const location = useLocation();
  //   const { cart } = location.state || {}; // Handle case if state is undefined
  const { cart, setCart } = useCart(); // Get cart and setCart from context
  console.log("here", cart);

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
              <button>Delete</button>
            </BookDiv>
          ))}

          <div id="checkout"></div>
        </Container>
      </>
    );
  }
}

export default CartPage;
