import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:4000', // Base URL for all requests
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
