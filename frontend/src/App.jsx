import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import Events from './components/Events';
import ForgotPassword from './components/ForgotPassword';
import AdminDashboard from './components/AdminDashboard';
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import Loader from './components/Loader';
import Jobs from './pages/jobs';
import NotFound from './components/NotFound';
import MentorDashboard from './components/MentorDashboard';
import './index.css';

// Context for global state
export const AppContext = createContext();

function App() {
  const [data, setData] = useState(null); // Initialize to null
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication
  const [title, setTitle] = useState('Default Title'); // Define the state for the title

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (token) {
          const response = await axios.get('/api/auth/me', { // Verify token with backend
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.user) { // Check if user exists in response
            setData(response.data.user); // Set user data
            setIsAuthenticated(true); // Set authentication to true
          }
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth(); // Call the function to check authentication
  }, []);

  // Function to update the title
  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <AppContext.Provider value={{ data, setData, isAuthenticated }}>
      <Router>
        <MainLayout>
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<Home setTitle={updateTitle} />} />
              <Route path="/about" element={<About setTitle={updateTitle} />} />
              <Route path="/contact" element={<Contact setTitle={updateTitle} />} />
              <Route path="/login" element={<Login setTitle={updateTitle} />} />
              <Route path="/jobs" element={<Jobs setTitle={updateTitle} />} />
              <Route path="/forgot-password" element={<ForgotPassword setTitle={updateTitle} />} />
              <Route path="/register" element={<Register setTitle={updateTitle} />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard setTitle={updateTitle} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mentor-dashboard"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <MentorDashboard setTitle={updateTitle} />
                  </ProtectedRoute>
                }
              />
              <Route path="/chat" element={<Chatbot setTitle={updateTitle} />} />
              <Route path="/events" element={<Events setTitle={updateTitle} />} />
              <Route path="/admin-dashboard" element={<AdminDashboard setTitle={updateTitle} />} />
              <Route path="*" element={<NotFound setTitle={updateTitle} />} />
            </Routes>
          )}
        </MainLayout>
      </Router>
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
