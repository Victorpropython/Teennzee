import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
//import 'react-toastify/dist/ReactToastify.css';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//import 'react-calendar/dist/Calendar.css';
//import 'react-chat-widget/lib/styles.css';
import {ToastContainer} from 'react-toastify';
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
import authService from './auth/authServices';
import authSlice from './auth/authSlice';
import Contact from './pages/Contact';
import './index.css';
import ProtectedRoute from './components/ProtectedRoute';
import Loader from './components/Loader'; // Loader for async operations
import NotFound from './components/NotFound'; // Enhanced 404 component

// Context for global state
export const AppContext = createContext();

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/auth/register");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update the document title dynamically
  const setTitle = (title) => {
    document.title = `${title} | TeenZee`;
  };

  return (
    <AppContext.Provider value={{ data, setData }}>
      <Router>
        <MainLayout>
          {loading ? (
            <Loader /> // Show loader while fetching data
          ) : (
            <Routes>
              <Route path="/" element={<Home setTitle={setTitle} />} />
              <Route path="/about" element={<About setTitle={setTitle} />} />
              <Route path="/contact" element={<Contact setTitle={setTitle} />} />
              <Route path="/login" element={<Login setTitle={setTitle} />} />
              <Route path="/forgot-password" element={<ForgotPassword setTitle={setTitle} />} />
              <Route path="/register" element={<Register setTitle={setTitle} />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard setTitle={setTitle} />
                  </ProtectedRoute>
                }
              />
              <Route path="/chat" element={<Chatbot setTitle={setTitle} />} />
              <Route path="/events" element={<Events setTitle={setTitle} />} />
              <Route path="/admin-dashboard" element={<AdminDashboard setTitle={setTitle} />} />
              <Route path="*" element={<NotFound setTitle={setTitle} />} />
            </Routes>
          )}
        </MainLayout>
      </Router>
      < ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
