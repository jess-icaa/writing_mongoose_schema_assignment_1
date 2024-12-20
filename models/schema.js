const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    default: ['user'], 
    enum: ['user', 'admin', 'moderator'] 
  },
  profile: {
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    age: {
      type: Number,
      min: 0
    }
  },
  lastLogin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true 
});


const User = mongoose.model('User', userSchema);

module.exports = User;
