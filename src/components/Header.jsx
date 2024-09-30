import styled from "styled-components";

import Cart from "./Cart";
let Owl = styled.img`
  width: 4rem;
  height: 4rem;
`;

let Head = styled.div`
  grid-row: 1/2;
  display: flex;
  padding: 10px;
  gap: 2rem;
  /* justify-content: center; */
  align-items: center;
  position: sticky;
  top: 0;
`;

let Name = styled.p`
  font-family: Helvetica;
  font-size: 1.6rem;
  font-weight: 600;
`;

function Header({ cart, setCartPreviewVisible, isCartPreviewVisible }) {
  return (
    <div style={{ position: "relative" }}>
      <Head>
        <Owl src="src\assets\owl-svgrepo-com.svg"></Owl>
        <Name>Book Haven</Name>
        <Cart
          cart={cart}
          setCartPreviewVisible={setCartPreviewVisible}
          isCartPreviewVisible={isCartPreviewVisible}
        />
      </Head>
    </div>
  );
}

export default Header;
