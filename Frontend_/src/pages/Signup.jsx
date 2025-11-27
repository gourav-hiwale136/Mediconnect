import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [Userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    setUserdata({ ...Userdata, [e.target.name]: e.target.value });
  };

  const signFun = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        " https://mediconnect-2-3daa.onrender.com/user/signup",
        Userdata
      );
      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      alert("Signup Error!");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={signFun}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          value={Userdata.name}
          onChange={handlechange}
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          name="email"
          value={Userdata.email}
          onChange={handlechange}
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          name="password"
          value={Userdata.password}
          onChange={handlechange}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition">
          Signup
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
