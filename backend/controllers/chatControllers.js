const Chat = require('../models/Chat');
const User = require('../models/User');

exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;

    const newChat = await Chat.create({ senderId, receiverId, message });
    res.status(201).json({ message: "Message sent", chat: newChat });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { userId } = req.params;

    const chats = await Chat.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
