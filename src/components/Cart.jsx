import { ShoppingCart } from "lucide-react";
import styled from "styled-components";

let CartStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

let Counter = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

function Cart({ cart }) {
  return (
    <>
      <button
        style={{
          all: "unset",
          marginLeft: "auto",
          marginRight: "1rem",
          cursor: "pointer",
        }}
      >
        <CartStyle>
          <ShoppingCart size="36px" />
          <Counter>{cart.length}</Counter>
        </CartStyle>
      </button>
    </>
  );
}

export default Cart;
