const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updates = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
