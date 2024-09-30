function CartPreview({ visible, cart }) {
  if (visible) {
    return (
      <div
        id="cart"
        style={{
          position: "absolute",
          backgroundColor: "grey",
          right: "0",
          width: "30vw",
          top: "15vh",
        }}
      >
        <h2>Your Cart</h2>
        {cart.map((item) => (
          <>
            <img src={item.img}></img>
            <div>
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>
            </div>

            <div>
              <button>+</button>
              <h4>{item.quantity}</h4>
              <button>-</button>
            </div>
            <button>Trash</button>
          </>
        ))}
      </div>
    );
  }
}

export default CartPreview;
