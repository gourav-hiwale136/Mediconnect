import React from "react";
import { Stethoscope, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom"; // <-- Import Link

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center text-center px-4">
      {/* Hero Section */}
      <div className="mt-20 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Welcome to Mediconnect
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Your trusted platform to manage patients, doctors, and appointments
          effortlessly.
        </p>
      </div>

      {/* Icons Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Doctors Card */}
        <Link to="/doctors">
          <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition">
            <Stethoscope size={80} className="text-blue-600" />
            <h3 className="mt-3 font-semibold text-xl">Doctors</h3>
            <p className="text-gray-500">Find and manage doctor details.</p>
          </div>
        </Link>

        {/* Patients Card */}
        <Link to="/patients">
          <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition">
            <Users size={80} className="text-green-600" />
            <h3 className="mt-3 font-semibold text-xl">Patients</h3>
            <p className="text-gray-500">View and manage patient records.</p>
          </div>
        </Link>

        {/* Appointments Card */}
        <Link to="/appointments">
          <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition">
            <Calendar size={80} className="text-purple-600" />
            <h3 className="mt-3 font-semibold text-xl">Appointments</h3>
            <p className="text-gray-500">Book and track appointments.</p>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-20 text-gray-500">
        © 2025 Mediconnect • All Rights Reserved
      </p>
    </div>
  );
};

export default Home;
