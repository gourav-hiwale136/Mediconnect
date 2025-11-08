import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">MediConnect</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        {/* When user is logged in */}
        {user ? (
          <>
            {user.role === "admin" && <Link to="/admin">Admin Dashboard</Link>}
            {user.role === "doctor" && (
              <Link to="/doctor">Doctor Dashboard</Link>
            )}
            {user.role === "patient" && (
              <Link to="/patient">Patient Dashboard</Link>
            )}

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
