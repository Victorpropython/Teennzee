const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'mentor', 'admin'], required: true },
  profile: {
    bio: { type: String },
    skills: { type: [String] },
    courses: {type: [String], default: [] },
    progress: { type: Number, default: 0 },
  },
}, { timestamps: true });

// Pre-save middleware to hash passwords
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);
