import Book from "./Book";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  gap: 1rem;
`;

function Books({ books, setPreview }) {
  return (
    <Container id="books">
      {books.map((book) => (
        <Book
          setPreview={() => setPreview(book)}
          book={book}
          key={book.title}
        />
      ))}
    </Container>
  );
}

export default Books;
