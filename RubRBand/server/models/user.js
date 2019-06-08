var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Username is required'
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  role: {
    type: String,
    enum: ['ADMIN', 'BASIC'],
    default: 'BASIC',
    required: 'Role is required'
  },
  profilePic: String,
  createDate: {
    type: Date,
    default: Date.now()
  },
  lastUpdate:{
    type: Date,
    default: Date.now()
  },
  lastLogin: Date,
  email: String,
  active:{
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('User',userSchema);
