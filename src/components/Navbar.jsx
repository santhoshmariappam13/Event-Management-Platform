import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">EventPlatform</Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-gray-200 transition-colors duration-300">Login</Link>
          <Link to="/register" className="hover:text-gray-200 transition-colors duration-300">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;