const express = require('express');
const Chat = require('../models/Chat');
const router = express.Router();

// Get all messages between two users
router.get('/:user1/:user2', async (req, res) => {
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
    res.status(500).json({ error: err.message });
  }
});

// Send a message
router.post('/', async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;
    const newChat = new Chat({ sender, receiver, message });
    await newChat.save();
    res.status(201).json(newChat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
