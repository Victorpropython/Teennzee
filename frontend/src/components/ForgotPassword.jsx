import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const forgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/forgot-password', { email }); 
      setMessage(response.data.message); 
      setError(''); 
    } catch (err) {
      console.error(err); 
      setError(err.response?.data?.message || 'An error occurred.'); 
      setMessage(''); 
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>

      {message && <div className="text-green-500 mb-4">{message}</div>}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Password Reset Email
        </button>
      </form>
    </div>
  );
};

export default forgotPassword