var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
  artistId: Number,
  permissions: String,
  genre: String,
  createDate: Date,
  songLocation: String,
  active: Boolean
});

module.exports = mongoose.model('Song',songSchema);
