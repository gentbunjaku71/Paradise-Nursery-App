import { plants } from "../data/plants";
import PlantCard from "../components/PlantCard";

export default function ProductListing() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "2rem" }}>
      {plants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
    </div>
  );
}

