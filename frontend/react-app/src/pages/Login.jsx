import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const loginFun = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/login",userData);
      console.log("Login Successful", response.data);
      alert("Login Successful!");
      navigate("/dashboard"); // or any page you want after login
    } catch (error) {
      console.error("Login Failed", error);
      alert("Login Error!");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={loginFun} className="login-form">
        <h2>Login</h2>
        <input type="email"name="email"placeholder="Email"value={userData.email}onChange={handleChange}/>
        <input type="password"name="password"placeholder="Password"value={userData.password}onChange={handleChange}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
