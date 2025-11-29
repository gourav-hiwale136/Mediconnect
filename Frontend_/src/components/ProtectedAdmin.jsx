import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedAdmin = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  let role = null;
  try {
    const decoded = jwtDecode(token);
    role = decoded.role;
  } catch (err) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAdmin;
