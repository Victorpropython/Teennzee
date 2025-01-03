const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Create an event
router.post('/', async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newEvent = new Event({ title, description, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
