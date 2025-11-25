import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors"
import Appointments from "./pages/Appointments";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointments />} />
        {/* <Route path="/doctors" element={<Doctors />} /> */}
      </Routes>
    </div>
  );
};

export default App;
