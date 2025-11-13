import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{
      height: "100vh",
      background: "url('https://via.placeholder.com/1200x600') center/cover no-repeat",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <h1>Paradise Nursery</h1>
      <p>Discover the best houseplants to bring life into your home!</p>
      <Link to="/products"><button style={{ padding: "1rem 2rem", fontSize: "1.2rem" }}>Get Started</button></Link>
    </div>
  );
}

