import styled from "styled-components";

const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 15px;
  background-color: white;
  display: flex;
  &:hover {
    background-color: #e74c3c;
  }

  &:hover + p {
    color: #34495e;
  }
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

function Book({ book, setPreview }) {
  return (
    <Button style={{ border: "none" }} onClick={() => setPreview(book)}>
      {book.volumeInfo.imageLinks == undefined ? null : (
        <img src={book.volumeInfo.imageLinks.thumbnail}></img>
      )}
      <DivInfo className="info">
        <BookTitle>{book.volumeInfo.title}</BookTitle>
        <Author>{book.volumeInfo.authors[0]}</Author>
      </DivInfo>
    </Button>
  );
}

export default Book;
