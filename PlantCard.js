import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem", textAlign: "center" }}>
      <img src={plant.image} alt={plant.name} width={150} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
    </div>
  );
}

