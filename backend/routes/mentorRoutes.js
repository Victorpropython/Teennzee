const express = require('express');
const Mentor = require('../models/Mentor');
const router = express.Router();

// Get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new mentor
router.post('/', async (req, res) => {
  try {
    const { name, expertise, bio } = req.body;
    const newMentor = new Mentor({ name, expertise, bio });
    await newMentor.save();
    res.status(201).json(newMentor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
