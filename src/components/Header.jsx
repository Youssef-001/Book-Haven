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
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap");
  font-family: Georgia;
  font-size: 1.8rem;
  font-weight: 600;
`;

function Header({
  cart,
  setCartPreviewVisible,
  isCartPreviewVisible,

  children,
}) {
  return (
    <div
      style={{
        position: "sticky",
        zIndex: "7000",
        top: "0",
        backgroundColor: "#eee",
      }}
    >
      <Head>
        <Owl alt="logo image" src="src\assets\owl-svgrepo-com.svg"></Owl>
        <Name>Book Haven</Name>
        {/* <Cart
          cart={cart}
          setCartPreviewVisible={setCartPreviewVisible}
          isCartPreviewVisible={isCartPreviewVisible}
        /> */}

        {children}
      </Head>
    </div>
  );
}

export default Header;
