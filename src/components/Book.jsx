import styled, { keyframes } from "styled-components";
import { ShoppingCart } from "lucide-react";
const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;
function getRandomNumber() {
  const min = 19;
  const max = 35;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Button = styled.div`
  all: unset;
  cursor: pointer;
  padding: 15px;
  background-color: white;
`;
const DivInfo = styled.div`
  width: 10rem;
  margin-left: 10px;
`;

const Author = styled.p`
  color: rgb(31, 41, 55);
  font-size: 1.1rem;
  font-weight: 600;
`;

const BookTitle = styled.p`
  color: #2c3e50;
  font-family: "Helvetica", serif;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
`;

const CartButton = styled.button`
  all: unset;
  &:hover {
    animation: ${shake} 0.5s ease-in-out;
  }
`;

let AddButton = styled.button`
  color: white;
  background-color: black;
  border-radius: 8px;
  padding: 10px;
`;

function Book({ book, setPreview, setCart, cart }) {
  return (
    <Button style={{ border: "none" }} onClick={() => setPreview(book)}>
      {book.volumeInfo.imageLinks == undefined ? null : (
        <img
          style={{ width: "200px", height: "300px" }}
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={`Book cover for ${book.volumeInfo.title} by ${book.volumeInfo.authors}`}
        ></img>
      )}
      <DivInfo className="info">
        <BookTitle>{book.volumeInfo.title}</BookTitle>
        <Author>{book.volumeInfo.authors}</Author>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Price style={{}} data-testid="book-price">
            {JSON.parse(localStorage.getItem(book.volumeInfo.title)).price}$
          </Price>

          <CartButton
            style={{ all: "unset" }}
            onClick={(e) => {
              if (!cart.some((item) => item.title == book.volumeInfo.title)) {
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
                    price:
                      e.target.parentElement.parentElement.childNodes[0]
                        .innerHTML,
                    quantity: JSON.parse(
                      localStorage.getItem(book.volumeInfo.title)
                    ).quantity,
                  },
                ]);
              } else {
                localStorage.setItem(
                  book.volumeInfo.title,
                  JSON.stringify({
                    ...JSON.parse(localStorage.getItem(book.volumeInfo.title)),
                    quantity: JSON.stringify(
                      parseInt(
                        JSON.parse(localStorage.getItem(book.volumeInfo.title))
                          .quantity
                      ) + 1
                    ),
                  })
                );
                let newCart = [...cart];
                for (let i = 0; i < newCart.length; i++) {
                  if (newCart[i].title == book.volumeInfo.title) {
                    let quant = parseInt(newCart[i].quantity);
                    newCart[i].quantity = quant + 1;

                    break;
                  }
                }
                setCart(newCart);
              }
            }}
          >
            <AddButton data-testid="add-button">Add to cart</AddButton>
          </CartButton>
        </div>
      </DivInfo>
    </Button>
  );
}

export default Book;
