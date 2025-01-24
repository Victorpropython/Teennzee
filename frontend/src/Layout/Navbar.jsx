import React from 'react';
import { NavLink } from 'react-router-dom';
//import AdminDashboard from 'components';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <NavLink className="flex items-center space-x-2" to="/">
            <img
              className="h-10 w-auto"
              src="images/logo.png"
              alt="TeenZee Logo"
            />
            <span className="text-2xl font-bold text-white hidden sm:block">
              TeenZee
            </span>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <NavLink to="/" className={linkClass}>
              <i className="fas fa-home mr-2"></i>Home
            </NavLink>
            <NavLink to="/Contact" className={linkClass}>
              <i className="fas fa-sign-in-alt mr-2"></i>Contact Us
            </NavLink>
            <NavLink to="./components/AdminDashboard" className={linkClass}>
              <i className="fas fa-user-plus mr-2"></i>AdminDashboard
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              <i className="fas fa-info-circle mr-2"></i>About Us
            </NavLink>
            <NavLink to="/Login" className={linkClass}>
              <i className="fas fa-envelope mr-2"></i>Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
