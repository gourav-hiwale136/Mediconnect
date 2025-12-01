import React from "react";
import { Stethoscope, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center text-center px-4">
      {/* Hero Section */}
      <div className="mt-20 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Welcome to Mediconnect
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          All-in-one platform to manage doctors, patients, and appointments in
          your clinic.
        </p>

        {/* Primary CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-gray-800">
          How MediConnect helps you
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="font-semibold text-gray-800 mb-1">
              1. Set up profiles
            </p>
            <p>Add doctors and patients with key details in minutes.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="font-semibold text-gray-800 mb-1">
              2. Schedule visits
            </p>
            <p>Create and manage appointments without confusion.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="font-semibold text-gray-800 mb-1">
              3. Track everything
            </p>
            <p>See all data in one place with a clean dashboard.</p>
          </div>
        </div>
      </div>

      {/* Icons / Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Doctors Card */}
        <Link to="/doctors">
          <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition">
            <Stethoscope size={80} className="text-blue-600" />
            <h3 className="mt-3 font-semibold text-xl">Doctors</h3>
            <p className="text-gray-500 mt-1 text-sm">
              Add, update, and manage doctor details and specialties.
            </p>
          </div>
        </Link>

        {/* Patients Card */}
        <Link to="/patients">
          <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition">
            <Users size={80} className="text-green-600" />
            <h3 className="mt-3 font-semibold text-xl">Patients</h3>
            <p className="text-gray-500 mt-1 text-sm">
              View medical history, visits, and patient records.
            </p>
          </div>
        </Link>

        {/* Appointments Card */}
        <Link to="/appointments">
          <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center cursor-pointer hover:scale-105 transition">
            <Calendar size={80} className="text-purple-600" />
            <h3 className="mt-3 font-semibold text-xl">Appointments</h3>
            <p className="text-gray-500 mt-1 text-sm">
              Book, reschedule, and track appointments easily.
            </p>
          </div>
        </Link>
      </div>

      {/* About / Footer */}
      <div className="mt-16 max-w-2xl text-sm text-gray-600">
        <p>
          MediConnect is a simple web-based tool designed for clinics and
          hospitals to reduce paperwork, avoid double bookings, and keep patient
          data organized.
        </p>
      </div>

      <p className="mt-8 mb-6 text-gray-500 text-xs">
        © 2025 Mediconnect • All Rights Reserved
      </p>
    </div>
  );
};

export default Home;
