function Book({ book }) {
  return (
    <div>
      <button>{book.volumeInfo.title};</button>
    </div>
  );
}

export default Book;
