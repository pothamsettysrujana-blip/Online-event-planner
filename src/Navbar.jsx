import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Online Event Planner
                </Link>

                <div className="navbar-nav ms-auto">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/events">
                        Events
                    </Link>

                    <Link className="nav-link" to="/register">
                        Register
                    </Link>

                    <Link className="nav-link" to="/participants">
                        Participants
                    </Link>

                    <Link className="nav-link" to="/gallery">
                        Gallery
                    </Link>

                    <Link className="nav-link" to="/faq">
                        FAQ
                    </Link>

                    <Link className="nav-link text-warning" to="/logout">
                        Logout
                    </Link>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;