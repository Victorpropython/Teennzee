import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import api from "../api/Api";
import { useContext } from "react";
import { AppContext } from "../App";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {setData, setIsAuthenticated} = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const { data } = await api.post("/auth/login", { email, password });

      // Store token in localStorage ONLY.  Do NOT store the role here.
      localStorage.setItem("token", data.token);

      alert("Login successful!");

      // Fetch user data (including role) from the backend using the token
      const userResponse = await api.get('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${data.token}`, // Use the token from login
        },
      });

      if (userResponse.data.user) {
        const user = userResponse.data.user;
        setData(user);
        setIsAuthenticated(true);
        // Redirect based on user role from the DATABASE
        navigate(getRoleBasedRoute(user.role));
      } else {
        throw new Error("User data not found after successful login.");
      }



    } catch (err) {
      setIsLoading(false);
      setErrorMessage(err.response?.data?.message || "Server error");
      console.error("Login error:", err); // Log the full error for debugging

    } finally {
      setIsLoading(false);
    }
  };

  const getRoleBasedRoute = (role) => {
    switch (role) {
      case "mentor":
        return "/mentor-dashboard";
      case "student":
        return "/dashboard";
      case "admin":
        return "/admin-dashboard";
      default:
        alert("Unknown role. Please contact support.");
        return "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <FaSignInAlt className="inline mr-2" /> Login to TeenZee
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <FaLock /> Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/mentor/session/create")}
              className="bg-indigo-600 text-white py-2 px-4 rounded shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-4"
            >
              Create New Session
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-indigo-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
