import { FileX } from "lucide-react";
import styled from "styled-components";

const ButtonGenre = styled.button`
  padding: 17px 20px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: "Helvetica";
  font-size: 15px;
  transition: all 0.2s ease; /* Shorter duration for a snappier feel */
  background-color: black;

  &:active {
    transform: scale(0.95); /* Slightly shrink the button on click */
    box-shadow: rgb(0 0 0 / 20%) 0 0 5px; /* Adjust shadow on click */
    background-color: #333; /* Change background color when clicked */
  }

  &:hover {
    background-color: #444; /* Change background color on hover */
  }
`;

function Nav({ setFilter }) {
  return (
    <div
      style={{
        gridRow: "2/3",
        gridColumn: "1/-1",
        padding: "2rem",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <ButtonGenre onClick={() => setFilter("fiction")}>Fiction</ButtonGenre>
      <ButtonGenre onClick={() => setFilter("Fantasy")}>Fantasy</ButtonGenre>
      <ButtonGenre onClick={() => setFilter("Mystery")}>Mystery</ButtonGenre>
      <ButtonGenre onClick={() => setFilter("Biography")}>
        Biography
      </ButtonGenre>
      <ButtonGenre onClick={() => setFilter("nonfiction")}>
        Non fiction
      </ButtonGenre>
    </div>
  );
}

export default Nav;
