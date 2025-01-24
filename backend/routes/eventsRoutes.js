const express = require('express');
const Event = require('../models/Event');
const { authenticate } = require('../middleware/middlewares');
const router = express.Router();

// Create an event
router.post('/', authenticate, async (req, res) => {
  try {
    const { title, description, date } = req.body;

    if (!title || !description || !date) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newEvent = new Event({ title, description, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: "Error creating event." });
  }
});

// Get all events
router.get('/', authenticate, async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving events." });
  }
});

module.exports = router;
