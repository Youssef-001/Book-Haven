import styled from "styled-components";
import { ShoppingCart } from "lucide-react";

function getRandomNumber() {
  const min = 19;
  const max = 35;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 15px;
  background-color: white;
  display: flex;
  /* &:hover {
    background-color: #e74c3c;
  }

  &:hover + p {
    color: #34495e;
  } */
`;
const DivInfo = styled.div`
  width: 7rem;
  margin-left: 10px;
`;

const Author = styled.p`
  color: grey;
`;

const BookTitle = styled.p`
  color: #2c3e50;
  font-family: "Helvetica", serif;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Price = styled.p`
  font-size: 1.1rem;
  background-color: black;
  color: white;
  border-radius: 20px;
  border: 1px solid black;
  padding: 7px 10px;
`;

function Book({ book, setPreview, setCart, cart }) {
  return (
    <Button style={{ border: "none" }} onClick={() => setPreview(book)}>
      {book.volumeInfo.imageLinks == undefined ? null : (
        <img src={book.volumeInfo.imageLinks.thumbnail}></img>
      )}
      <DivInfo className="info">
        <BookTitle>{book.volumeInfo.title}</BookTitle>
        <Author>{book.volumeInfo.authors}</Author>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{ all: "unset" }}
            onClick={
              (e) => {
                setCart([
                  ...cart,
                  {
                    title:
                      e.target.parentElement.parentElement.parentElement
                        .childNodes[0].innerHTML,
                    author:
                      e.target.parentElement.parentElement.parentElement
                        .childNodes[1].innerHTML,
                    img: e.target.parentElement.parentElement.parentElement
                      .parentElement.childNodes[0].src,
                  },
                ]);
              }
              //   let info = e.target.parentElement.parentElement.parentElement
              //   let title = info.childNodes[0];
              //   let author = info.childNodes[1];
              //   let img = info.parentElement.childNodes[0].src;
            }
          >
            <ShoppingCart size="32px" strokeWidth="2px" />
          </button>
          <Price style={{}}>{getRandomNumber()}$</Price>
        </div>
      </DivInfo>
    </Button>
  );
}

export default Book;
