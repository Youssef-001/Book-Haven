import { FileX } from "lucide-react";
import styled from "styled-components";

const ButtonGenre = styled.button`
  cursor: pointer;
  all: unset;
  color: white;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: "Helvetica";
  font-size: 15px;
  cursor: pointer;

  &:active {
    transform: scale(0.95); /* Slightly shrink the button on click */
    box-shadow: rgb(0 0 0 / 20%) 0 0 5px; /* Adjust shadow on click */
    background-color: #333; /* Change background color when clicked */
  }

  &:hover {
    color: #c0bab2; /* Change background color on hover */
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
        gap: "3rem",
        flexWrap: "wrap",
        marginLeft: "3rem",
        justifyContent: "center",
        // backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity))",
        background: "rgb(31 41 55)",
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
