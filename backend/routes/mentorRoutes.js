const express = require('express');
const Mentor = require('../models/Mentor');
const { authenticate } = require('../middleware/middlewares');
const router = express.Router();

// Get all mentors
router.get('/', authenticate, async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving mentors." });
  }
});

// Add a new mentor
router.post('/', authenticate, async (req, res) => {
  try {
    const { name, expertise, bio } = req.body;

    if (!name || !expertise || !bio) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMentor = new Mentor({ name, expertise, bio });
    await newMentor.save();
    res.status(201).json(newMentor);
  } catch (err) {
    res.status(500).json({ error: "Error adding mentor." });
  }
});

module.exports = router;
