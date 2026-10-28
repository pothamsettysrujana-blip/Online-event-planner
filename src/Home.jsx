import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-section">

        <h1>Online Event Planner</h1>

        <p>
          Plan, Explore and Register for Exciting Events
        </p>

        <Link
          to="/events"
          className="btn btn-warning btn-lg"
        >
          Explore Events
        </Link>

      </div>
    </>
  );
}

export default Home;