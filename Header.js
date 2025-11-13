import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#d4f0d4" }}>
      <h2>Paradise Nursery</h2>
      <nav>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/products" style={{ margin: "0 1rem" }}>Products</Link>
        <Link to="/cart" style={{ margin: "0 1rem" }}>Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}

