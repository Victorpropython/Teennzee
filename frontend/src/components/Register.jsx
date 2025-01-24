import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default role
    profile: {
      bio: "",
      skills: "",
      courses: "",
    }
  });

  //const [loading, setLoading] = useState(false); // To handle loading state

  const [isMentor, setIsMentor] = useState(false); // To toggle mentor-specific fields
  const [loading, setLoading] = useState(false);

  const { username, email, password, role, profile } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onProfileChange = (e) => {
    setFormData({
      ...formData,
      profile: { ...profile, [e.target.name]: e.target.value.split(",") },
    });
  };

  const onRoleChange = (e) => {
    const selectedRole = e.target.value;
    setIsMentor(selectedRole === "mentor");
    setFormData({ ...formData, role: selectedRole });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Adjust API URL for your backend
      const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
      const res = await axios.post(`${baseURL}/api/auth/register`, formData);

      alert("Registration successful!");
      console.log("Response:", res.data);

      // Optionally, redirect after registration
      window.location.href = '/login';
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
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter Your Username"
              onChange={onChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={onChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Your Password"
              onChange={onChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={role}
              onChange={onRoleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          {isMentor && (
            <>
              <div>
                <label>Bio</label>
                <textarea name="bio" value={profile.bio} onChange={onProfileChange}
                //onChange={handleInputChange}
                
                placeholder="Short bio" style={{width: '100%', padding:'4px'}}></textarea>
              </div>
              <div>
                <label>Skills</label>
                <input
                  type="text"
                  name="skills"
                  value= {formData.skills}
                  style={{width: '100%', padding:'5px'}}
                  placeholder="Comma-separated"
                  onChange={onProfileChange}
                  //onChange={onChange}
                />
              </div>
              <div>
                <label>Courses</label>
                <input
                  type="text"
                  name="courses"
                  value= {formData.courses}
                  style={{width: '100%', padding:'5px'}}
                  placeholder="Comma-separated"
                  onChange={onProfileChange}
                  //onChange={(e) => setFormData({ ...formData, courses: e.target.value })}
                />
              </div>
            </>
          )}
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
