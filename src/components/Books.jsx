import Book from "./Book";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  gap: 1rem;
`;

function Books({ books }) {
  console.log("here", books);
  return (
    <Container id="books">
      {books.map((book) => (
        <Book book={book} />
      ))}
    </Container>
  );
}

export default Books;
