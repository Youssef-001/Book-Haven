import { useLocation } from "react-router-dom";

function CartPage() {
  const location = useLocation();
  const { cart } = location.state || {}; // Handle case if state is undefined
  console.log("here", cart);

  if (cart) return <>cart</>;
}

export default CartPage;
