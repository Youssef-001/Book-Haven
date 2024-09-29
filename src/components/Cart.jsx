import { ShoppingCart } from "lucide-react";

function Cart() {
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
        <ShoppingCart size="36px" />
      </button>
    </>
  );
}

export default Cart;
