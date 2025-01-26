const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const User = require('../models/User'); // Your User model

// Register a new user
exports.register = async (req, res) => {
  try {
    console.log('Incoming request body:', req.body);

    // Destructure the body
    const { name, email, password, role, profile } = req.body;

    // Validate required fields
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Validate role
    if (!['student', 'mentor', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role specified.' });
    }

    // Handle profile fields (nested)
    const { bio, skills, courses, progress } = profile || {};

    // Check progress is valid (if provided)
    if (progress && (progress < 0 || progress > 100)) {
      return res.status(400).json({ message: 'Progress must be between 0 and 100.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use.' });
    }

    // Generate JWT_SECRET if not available in .env
    let jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      jwtSecret = generateJWTSecret(); // Generate and save to .env
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = new User({
      username: name,
      email,
      password: hashedPassword,
      role,
      profile: {
        bio: bio || '',
        skills: skills || [],
        courses: courses || [],
        progress: progress || 0,
      },
      jwtSecret, // Optionally store the JWT secret in the user's document
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token using the stored or generated JWT_SECRET
    const token = jwt.sign({ userId: newUser._id, role: newUser.role }, jwtSecret, { expiresIn: '1h' });

    // Respond with success
    res.status(201).json({
      message: 'User registered successfully!',
      user: newUser,
      token,
    });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Function to generate a random JWT_SECRET and save it to .env
const generateJWTSecret = () => {
  const secret = crypto.randomBytes(64).toString('hex'); // 64 bytes, hex format
  const envFilePath = path.resolve(__dirname, '..', '.env');

  // Read the current .env file
  dotenv.config();

  // Update JWT_SECRET in the .env file
  const newEnvContent = fs.readFileSync(envFilePath, 'utf-8').replace(/JWT_SECRET=.*/, `JWT_SECRET=${secret}`);
  fs.writeFileSync(envFilePath, newEnvContent, 'utf-8');

  // Return the new secret to be used in the app
  return secret;
};




// Middleware to check for valid token and return user
exports.getCurrentUser = async (req, res) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // or from user document
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json({ user }); // Send back the user data
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Create a JWT token with the user ID and role
    const token = jwt.sign(
      { id: user._id, role: user.role },  // Include role in the payload
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Respond with token and role
    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role // Send the role back in the response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



exports.logout = async (req, res) => {
  try {
    // Logic for handling logout (e.g., invalidate token)
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Placeholder for a database of reset tokens
const resetTokens = new Map();

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetURL = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
    resetTokens.set(resetToken, user._id); // Save reset token

    // Configure nodemailer to send the reset email
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with your email service
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    await transporter.sendMail({
      to: user.email,
      subject: "Password Reset Request",
      text: `You requested a password reset. Use this link to reset your password: ${resetURL}`,
    });

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const userId = resetTokens.get(token);
    if (!userId) return res.status(400).json({ message: "Invalid or expired reset token" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(userId, { password: hashedPassword });
    resetTokens.delete(token); // Invalidate the used token

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

