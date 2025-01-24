import axios from 'axios';
import { environment } from './env'; 

const API_URL = environment.REACT_APP_BACKEND_URL;

//Register a new user

const registerUser = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/register`, data);
    return res.data;
    if (res.data) {
      localStorage.setItem('user', JSON.stringify(res.data));
    }
  } catch (error) {
    throw error;
  }
  return res.data;
}

const authService = {
  registerUser
}

export default authService;