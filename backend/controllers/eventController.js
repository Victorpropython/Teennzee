const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newEvent = await Event.create({ title, description, date });
    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
