import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";

function RSVPConfirmation() {

  const { state } = useLocation();

  return (
    <div className="container mt-5 text-center">

      <h2 className="text-success">
        Registration Successful
      </h2>

      <h4>{state?.name}</h4>

      <p>Event : {state?.event}</p>

      <p>Attendees : {state?.attendees}</p>

      <p>
        Your RSVP has been confirmed!
      </p>

      <Link
        to="/"
        className="btn btn-primary"
      >
        Back Home
      </Link>

    </div>
  );
}

export default RSVPConfirmation;