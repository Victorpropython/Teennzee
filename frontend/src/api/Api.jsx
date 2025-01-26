import axios from 'axios';

// frontend/src/api.js
const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};


const api = axios.create({
  baseURL: API_URL, // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});


// Add an interceptor for attaching tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



export default api;
