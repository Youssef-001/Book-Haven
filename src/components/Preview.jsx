import styled from "styled-components";

let ImagePrev = styled.img`
  width: 200px;
  height: 350px;
`;

function Preview({ book }) {
  if (book != "") {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "sticky", top: "0" }}>
          <p>{book.volumeInfo.title}</p>
          <ImagePrev src={book.volumeInfo.imageLinks.thumbnail}></ImagePrev>
          <p>{book.volumeInfo.description}</p>
        </div>
      </div>
    );
  } else return <h3>NO BOOK CHOSEN (:</h3>;
}

export default Preview;
