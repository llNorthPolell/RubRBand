var mongoose = require('mongoose');

var rBandSchema = new mongoose.Schema({
  rBandName: String,
  rBandPic: String,
  createDate: Date,
  lastUpdate: Date,
  active: Boolean
});

module.exports = mongoose.model('RBand',rBandSchema);
