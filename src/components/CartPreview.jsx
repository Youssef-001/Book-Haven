import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

let PrevButton = styled.button`
  height: 2rem;
  width: 3rem;
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
          position: "fixed",
          backgroundColor: "white",
          right: "0",
          width: "30vw",
          top: "0",
          padding: "1rem",
          zIndex: "6000",
          border: "2px solid grey",
          height: "100vh",
        }}
      >
        <PrevHead>
          <h2>Your Cart</h2>
          <Cross onClick={() => setCartPreview(!visible)}>X</Cross>
        </PrevHead>

        {/* Wrap the scrollable content inside PerfectScrollbar */}
        <PerfectScrollbar style={{ maxHeight: "90vh" }}>
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
                  <PrevButton>Trash</PrevButton>
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
