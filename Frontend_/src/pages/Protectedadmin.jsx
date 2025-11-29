import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If not admin
  if (role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedAdmin;
