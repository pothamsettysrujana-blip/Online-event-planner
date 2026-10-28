import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return children;
}

export default ProtectedRouter;