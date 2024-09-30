import { ShoppingCart } from "lucide-react";
import styled from "styled-components";
let CartStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

let Counter = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

let CartButton = styled.button`
  margin-left: auto;
  cursor: pointer;
  background-color: #f4f4f9;
  outline: none;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;

function Cart({ cart }) {
  return (
    <>
      <CartButton>
        <CartStyle>
          <ShoppingCart size="28px" />
          <Counter>Cart ({cart.length})</Counter>
        </CartStyle>
      </CartButton>
    </>
  );
}

export default Cart;
