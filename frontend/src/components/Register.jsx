import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash, FaBook, FaCircle, FaEnvelope, FaLightbulb, FaLock, FaPen, FaUserPlus, FaChartPie } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // default role
    profile: {
      bio: "",
      skills: "",
      courses: "",
      progress: "", // New progress field
    },
  });

  const [isMentor, setIsMentor] = useState(false); // Toggle mentor-specific fields
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  
  const validateForm = () => { 
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = ' Username is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]/)) newErrors.email = 'invalid email format.';
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters long";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  }
  

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onProfileChange = (e) => {
    setFormData({
      ...formData,
      profile: { ...formData.profile, [e.target.name]: e.target.value },
    });
  };

  const onRoleChange = (e) => {
    const selectedRole = e.target.value;
    setIsMentor(selectedRole === "mentor");
    setFormData({ ...formData, role: selectedRole });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return
    }
    setLoading(true);
  
    try {
      const payload = {
        name: formData.username, // Map username to name
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: formData.role,
        profile: {
          bio: formData.profile.bio,
          skills: formData.profile.skills,
          courses: formData.profile.courses,
          progress: formData.profile.progress,
        },
      };
  
      console.log("Submitting payload:", payload);
  
      const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
      const res = await axios.post(`${baseURL}/api/auth/register`, payload);
  
      alert("Registration successful!");
      console.log("Response:", res.data);
  
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Registration failed: " + (err.response?.data?.message || "Can't register"));
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center "><FaUserPlus className="inline mr-2" />Register</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700"> <FaCircle className="absolute inset-y-0 right-3 flex items-center"/> Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter Your Username"
              onChange={onChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700" > <FaEnvelope className="inline mr-2" /> Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter Your Email"
              onChange={onChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
{/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700"> < FaLock className="inline mr-2"/> Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={onChange}
                placeholder="Enter Your Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700"> <FaLock className="inline mr-2" /> Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={onChange}
              placeholder="Confirm Your Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>


          {/* Role Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={onRoleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="student"> Student</option>
              <option value="mentor">  Mentor</option>
            </select>
          </div>

          {/* Bio Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700"> < FaPen className="inline mr-2"/>Bio</label>
            <textarea
              name="bio"
              value={formData.profile.bio}
              onChange={onProfileChange}
              placeholder="Short bio"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Skills Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700"> < FaLightbulb className="inline mr-2"/> Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.profile.skills}
              placeholder="Comma-separated"
              onChange={onProfileChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Courses Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">< FaBook className="inline mr-2"/>Courses</label>
            <input
              type="text"
              name="courses"
              value={formData.profile.courses}
              placeholder="Comma-separated"
              onChange={onProfileChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Progress Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700"> < FaChartPie className="inline mr-2"/>Progress</label>
            <input
              type="text"
              name="progress"
              value={formData.profile.progress}
              placeholder="Progress in percentage (e.g., 50%)"
              onChange={onProfileChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
