import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ participants, setParticipants }) {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        event: "",
        attendees: ""
    });

    // WRITE IT HERE ↓↓↓
    const handleSubmit = (e) => {
        e.preventDefault();

        setParticipants([
            ...participants,
            form
        ]);

        navigate("/participants");
    };

    return (
        <div className="register-page">
            <div className="register-card">

                <h2>Event Registration</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control mb-2"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control mb-2"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Phone"
                        className="form-control mb-2"
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                    />

                    <select
                        className="form-control mb-2"
                        onChange={(e) =>
                            setForm({ ...form, event: e.target.value })
                        }
                    >
                        <option>Select Event</option>
                        <option>Tech Conference</option>
                        <option>Music Concert</option>
                        <option>Business Meetup</option>
                    </select>

                    <input
                        type="number"
                        placeholder="Attendees"
                        className="form-control mb-2"
                        onChange={(e) =>
                            setForm({ ...form, attendees: e.target.value })
                        }
                    />

                    <button className="register-btn">
                        Register
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Register;