import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <img src={item.image} alt={item.name} width={80} />
      <div>
        <h4>{item.name}</h4>
        <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
      </div>
      <div>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
      </div>
    </div>
  );
}

