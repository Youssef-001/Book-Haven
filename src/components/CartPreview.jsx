import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Trash2 } from "lucide-react";
import "react-perfect-scrollbar/dist/css/styles.css";

const PrevButton = styled.button`
  height: 2rem;
  width: 3rem;
  background-color: white;
  color: black;
  border: 1px solid grey;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

  &:hover {
    background-color: #eee;
  }

  &:active {
    transform: scale(0.95); /* Slightly reduce size on click */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
  }
`;
let Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem;
`;

let PrevHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

let Cross = styled.button`
  width: 3rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

let BookDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

let Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 300;
`;

function CartPreview({ visible, cart, setCartPreview }) {
  if (visible) {
    return (
      <div
        id="cart"
        style={{
          position: "fixed", // Keep the cart in the same place
          backgroundColor: "white",
          right: "0", // Align to the right side of the screen
          top: "0", // Start from the top of the viewport
          width: "30vw", // Adjust the width as needed
          padding: "1rem",
          zIndex: "6000",
          border: "2px solid grey",
          height: "100vh", // Full height of the viewport
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PrevHead>
          <h2>Your Cart</h2>
          <Cross onClick={() => setCartPreview(!visible)}>X</Cross>
        </PrevHead>

        {/* Scrollable content inside PerfectScrollbar with smooth scrolling */}
        <PerfectScrollbar
          options={{
            wheelPropagation: false, // Prevent parent scroll
            swipeEasing: true, // Add easing for swipe gestures
            suppressScrollX: true, // Disable horizontal scrolling for smoother feel
          }}
          style={{ flexGrow: 1 }}
        >
          <Container>
            {cart.map((item) => (
              <BookDiv key={`cart.${item.title}`}>
                <img src={item.img} alt={item.title}></img>
                <div>
                  <h4>{item.title}</h4>
                  <h4>{item.price}</h4>
                </div>
                <Controls>
                  <PrevButton>+</PrevButton>
                  <h4>{item.quantity}</h4>
                  <PrevButton>-</PrevButton>
                  <PrevButton style={{ all: "unset", cursor: "pointer" }}>
                    <Trash2 />
                  </PrevButton>
                  <br></br>
                </Controls>
              </BookDiv>
            ))}
          </Container>
        </PerfectScrollbar>
      </div>
    );
  }
  return null;
}

export default CartPreview;
