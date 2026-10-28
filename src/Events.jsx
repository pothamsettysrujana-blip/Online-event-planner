import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Events() {

  const navigate = useNavigate();

  const events = [
    {
      name: "Tech Conference",
      date: "20 Aug 2025",
      time: "10:00 AM",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865"
    },
    {
      name: "Music Concert",
      date: "15 Sept 2025",
      time: "6:00 PM",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
    },
    {
      name: "Business Meetup",
      date: "12 Oct 2025",
      time: "11:00 AM",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b"
    }
  ];

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Upcoming Events
      </h2>

      <div className="row">

        {events.map((event,index)=>(
          <div className="col-md-4 mb-4" key={index}>

            <div className="card h-100">

              <img
                src={event.image}
                className="card-img-top"
              />

              <div className="card-body">

                <h4>{event.name}</h4>

                <p>Date : {event.date}</p>

                <p>Time : {event.time}</p>

                <p>Location : {event.location}</p>

                <button
                  className="btn btn-primary"
                  onClick={()=>navigate("/register")}
                >
                  Register Now
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Events;