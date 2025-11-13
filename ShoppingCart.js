
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <div>
        {items.length === 0 ? <p>Your cart is empty.</p> : items.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/products"><button>Continue Shopping</button></Link>
        <button style={{ marginLeft: "1rem" }}>Checkout</button>
      </div>
    </div>
  );
}
