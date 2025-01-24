const express = require('express');
const Chat = require('../models/Chat');
const { authenticate } = require('../middleware/middlewares');
const router = express.Router();

// Get all messages between two users (corrected)
router.get('/:user1/:user2', authenticate, async (req, res) => {
  try {
    const { user1, user2 } = req.params;
    const chats = await Chat.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 },
      ],
    });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving chat messages." });
  }
});

// Send a message (already correct)
router.post('/', authenticate, async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;

    if (!sender || !receiver || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newChat = new Chat({ sender, receiver, message });
    await newChat.save();
    res.status(201).json(newChat);
  } catch (err) {
    res.status(500).json({ error: "Error sending message." });
  }
});

module.exports = router;