import { useCart } from "./CartContext";

const Cart = () => {
  const { remove, cart } = useCart();

  return (
    <div className="container mt-4">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <h2>Empty.....</h2>
      ) : (
        <ul className="list-group">
          {cart.map((p, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              {p.name} - {p.price}
              <button onClick={() => remove(index)} className="btn btn-primary">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
