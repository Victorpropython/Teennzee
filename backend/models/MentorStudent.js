const mongoose = require('mongoose');

const MentorStudentSchema = new mongoose.Schema({
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
});

module.exports = mongoose.model('MentorStudent', MentorStudentSchema);