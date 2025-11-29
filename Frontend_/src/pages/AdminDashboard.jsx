import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to Admin Dashboard</h1>

        {/* Top stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Total Patients</h2>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Today's Appointments</h2>
            <p className="text-3xl font-bold mt-2">18</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Pending Reports</h2>
            <p className="text-3xl font-bold mt-2">6</p>
          </div>
        </div>

        {/* Links to admin sections */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/admin/appointments"
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Manage Appointments
          </Link>

          <Link
            to="/patients"
            className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700"
          >
            View Patients
          </Link>

          <Link
            to="/doctors"
            className="inline-block px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            View Doctors
          </Link>
        </div>

        <h2 className="text-2xl font-bold mt-10">Recent Appointments</h2>
        {/* later: show small recent list or table here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
