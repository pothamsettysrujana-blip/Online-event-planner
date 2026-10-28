import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", name);

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button
          type="submit"
          className="btn btn-primary mt-3"
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Signup;