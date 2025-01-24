import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:4000/api', // Base URL for all requests
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

export const loginUser = async (credentials) => {
  return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/auth/register`, userData);
};

export const forgotPassword = async (email) => {
  return axios.post(`${API_BASE_URL}/auth/forgot-password`, { email });
};

export const resetPassword = async (data) => {
  return axios.post(`${API_BASE_URL}/auth/reset-password`, data);
};

export const getChatMessages = async () => {
  return axios.get(`${API_BASE_URL}/chat`);
};

export const getEvents = async () => {
  return axios.get(`${API_BASE_URL}/events`);
};


export default api;
