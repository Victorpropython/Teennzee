const User = require('../models/User');
const MentorStudent = require('../models/MentorStudent');

exports.addMentor = async (req, res) => {
  try {
    const { name, expertise, email } = req.body;

    const existingMentor = await User.findOne({ email, role: 'mentor' });
    if (existingMentor) return res.status(400).json({ message: "Mentor already exists" });

    const mentor = await User.create({ name, email, expertise, role: 'mentor' });
    res.status(201).json({ message: "Mentor added successfully", mentor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMentees = async (req, res) => {
  try {
    const mentorId = req.user.id;

    const mentees = await MentorStudent.find({ mentorId }).populate('studentId', 'name email');
    res.status(200).json(mentees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
