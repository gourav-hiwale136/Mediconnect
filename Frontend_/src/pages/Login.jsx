import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      const response = await axios.post(
        " https://mediconnect-2-3daa.onrender.com/user/login",
        userData
      );
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("Login Error!");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={loginFun}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Login
        </h2>

        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 font-semibold">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
