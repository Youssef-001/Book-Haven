import { BookOpen } from "lucide-react";
import styled from "styled-components";
import { ShoppingCart } from "lucide-react";
let Owl = styled.img`
  width: 4rem;
  height: 4rem;
`;

let SideBar = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  position: sticky;
  top: 0;
  left: 0;
`;

let NavButton = styled.button`
  border: none;
  all: unset;
  cursor: pointer;
`;

let SideIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
`;

function Sidebar() {
  return (
    <div style={{ position: "relative" }}>
      <SideBar>
        <Owl src="src\assets\owl-svgrepo-com.svg"></Owl>
        <SideIcons>
          <NavButton>
            <BookOpen color="black"></BookOpen>
          </NavButton>
          <NavButton>
            <ShoppingCart />
          </NavButton>
        </SideIcons>
      </SideBar>
    </div>
  );
}

export default Sidebar;
