import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/Api";
import ForgotPassword from "../components/ForgotPassword";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <i className="fas fa-user-circle mr-2"></i>Login to TeenZee
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
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
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-indigo-600 hover:underline"
          >
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
