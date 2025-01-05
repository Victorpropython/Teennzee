import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <Link to="/" className="px-3">Home</Link>
      <Link to="/about" className="px-3">About</Link>
      <Link to="/contact" className="px-3">Contact</Link>
      <Link to="/login" className="px-3">Login</Link>
    </nav>
  );
};

export default Navbar;
