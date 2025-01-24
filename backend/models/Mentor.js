const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: [String], required: true },
  bio: { type: String, required: true },
  availability: { type: Boolean, default: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Reference User model
});

module.exports = mongoose.model('Mentor', MentorSchema);
