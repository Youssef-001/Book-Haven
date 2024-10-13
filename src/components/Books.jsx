import Book from "./Book";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* width: 70vw; */
  grid-row: 3/-1;
  gap: 1rem;
  justify-content: center;
`;

function Books({ books = [], setPreview, cart, setCart }) {
  console.log(books);

  return (
    <Container id="books">
      {books.map((book) =>
        book.volumeInfo.imageLinks == undefined ? null : (
          <Book
            cart={cart}
            setCart={setCart}
            setPreview={() => setPreview(book)}
            book={book}
            key={book.title}
          />
        )
      )}
    </Container>
  );
}

export default Books;
