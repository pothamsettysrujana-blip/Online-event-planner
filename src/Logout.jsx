import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/");
  }, []);

  return <h3>Logging Out...</h3>;
}

export default Logout;