const User = require('../models/User');
const MentorStudent = require('../models/MentorStudent');

exports.getDashboardData = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalMentors = await User.countDocuments({ role: 'mentor' });
    const pendingConnections = await MentorStudent.countDocuments({ status: 'pending' });
    res.json({ totalStudents, totalMentors, pendingConnections });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};