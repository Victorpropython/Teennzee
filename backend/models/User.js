const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Convert email to lowercase
      validate: {
        validator: (v) =>
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
        message: (props) => `${props.value} is not a valid email address.`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Enforce a minimum password length
    },
    role: {
      type: String,
      enum: ['student', 'mentor', 'admin'],
      required: true,
    },
    profile: {
      bio: {
        type: mongoose.Schema.Types.Mixed, // Allows strings, numbers, or other types
        default: '',
      },
      skills: {
        type: [String],
        default: [],
      },
      courses: {
        type: [String],
        default: [],
      },
      progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100, // Ensure progress is a percentage value
      },
    },
    isActive: {
      type: Boolean,
      default: true, // A flag for active/inactive accounts
    },
    tokens: {
      token: String
    }
  },
  { timestamps: true }
);

// Pre-save middleware to hash passwords
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

// Instance method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Virtual for hiding sensitive data during serialization
UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password; // Exclude password from the response
    delete ret.__v; // Exclude version key
    return ret;
  },
});

module.exports = mongoose.model('User', UserSchema);
