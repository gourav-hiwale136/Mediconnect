import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 h-18 text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold py-2.5">MediConnect</h1>

        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link className="hover:text-gray-200" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-200" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-200" to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-200" to="/patients">
              Patients
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-200" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-3 mt-3 bg-blue-500 p-4 rounded-lg text-lg">
          <Link onClick={() => setOpen(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/login">
            Login
          </Link>
          <Link onClick={() => setOpen(false)} to="/signup">
            Signup
          </Link>
          <Link onClick={() => setOpen(false)} to="/patients">
            Patients
          </Link>
          <Link onClick={() => setOpen(false)} to="/dashboard">
            Dashboard
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
