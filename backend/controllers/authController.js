const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.register = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);
    const { name, email, password, role, profile } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword, role, profile: profile || {}, });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn:  process.env.JWT_EXPIRES_IN });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ message: "Login successful", token });
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

