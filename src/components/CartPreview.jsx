function CartPreview({ visible, cart }) {
  if (visible) {
    return (
      <div>
        <h2>Your Cart</h2>
        <img src={cart.img}></img>
        <div>
          <h4>{cart.title}</h4>
          <h4>{cart.price}</h4>
        </div>

        <div>
          <button>+</button>
          <h4>1</h4>
          <button>-</button>
        </div>
        <div>Trash</div>
      </div>
    );
  }
}
