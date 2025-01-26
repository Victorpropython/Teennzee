const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require('crypto');
require('dotenv').config();

// Middleware to check authentication
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user || !user.tokens.some((t) => t.token === token)) {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }

    req.user = user;
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
const generateToken = async (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

  // Save token to user
  user.tokens = user.tokens || [];
  user.tokens.push({ token });
  await user.save();

  return token;
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  authenticate,
  authorize,
  generateToken,
  verifyToken,
};
