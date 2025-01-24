const express = require('express');
const User = require('../models/User');
const { authenticate } = require('../middleware/middlewares');
const router = express.Router();


router.post('/register', async (req, res) => {
  try {
      const { username, email, password, role } = req.body;

      // Validation logic
      if (!username || !email || !password || !role) {
          return res.status(400).json({ message: "All fields are required" });
      }

      // Registration logic
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword, role });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Server error" });
  }
});


// Get user profile
router.get('/:id', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: "User not found." });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving user." });
  }
});

// Update user profile
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { username, email, bio, skills, progress } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, 'profile.bio': bio, 'profile.skills': skills, 'profile.progress': progress },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ error: "User not found." });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Error updating user." });
  }
});

module.exports = router;
