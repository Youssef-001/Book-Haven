import { BookOpen } from "lucide-react";
import styled from "styled-components";
let Owl = styled.img`
  width: 4rem;
  height: 4rem;
`;

let SideBar = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  padding: 10px;
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
    <div style={{ position: "relative", gridRow: "1/-1" }}>
      <SideBar>
        <div style={{ display: "flex" }}>
          <Owl src="src\assets\owl-svgrepo-com.svg"></Owl>
          <h3>Book Haven</h3>
        </div>
        <SideIcons>
          <NavButton>
            <BookOpen color="black"></BookOpen>
          </NavButton>
          <NavButton></NavButton>
        </SideIcons>
      </SideBar>
    </div>
  );
}

export default Sidebar;
