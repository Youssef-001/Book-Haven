import { ShoppingCart } from "lucide-react";
import styled from "styled-components";
import CartPreview from "./CartPreview";
import { useState } from "react";

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
  background-color: #eee;
  outline: none;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;

function Cart({
  cart = [],
  isCartPreviewVisible,
  setCartPreviewVisible,
  setCart,
}) {
  const handleClick = () => {
    setCartPreviewVisible(!isCartPreviewVisible); // Toggle visibility
  };
  return (
    <>
      {isCartPreviewVisible && (
        <CartPreview
          setCartPreview={setCartPreviewVisible}
          visible={true}
          cart={cart}
          setCart={setCart}
        />
      )}
      <CartButton onClick={handleClick}>
        <CartStyle>
          <ShoppingCart size="28px" data-testid="CartIcon" />
          <Counter data-testid="cartCounter">Cart ({cart.length || 0})</Counter>
        </CartStyle>
      </CartButton>
    </>
  );
}

export default Cart;
