const jwt = require('jsonwebtoken');
const User = require('../models/User');
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
require('dotenv').config(); // Load environment variables

// Generate a random secret for JWT (for development/testing purposes only)
function generateRandomKey(length = 32) {
  return crypto.randomBytes(length).toString('base64url');
}

const randomSecret = generateRandomKey();
console.log('Generated Secret:', randomSecret);

// Middleware to check authentication
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password'); // Attach user data to the request
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Middleware to authorize roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied. Unauthorized role.' });
    }
    next();
  };
};

// JWT functions
const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Export all middleware and utilities
module.exports = {
  authenticate,
  authorize,
  generateToken,
  verifyToken,
};
