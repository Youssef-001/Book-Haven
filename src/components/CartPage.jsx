import { useLocation, Link } from "react-router-dom";
import Header from "./Header";
import { House } from "lucide-react";
import styled from "styled-components";

let HomeButton = styled.button`
  all: unset;
  margin-left: auto;
  margin-right: 1rem;
`;

function CartPage() {
  const location = useLocation();
  const { cart } = location.state || {}; // Handle case if state is undefined
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
      </>
    );
  }
}

export default CartPage;
