var mongoose = require('mongoose');

var userRBandSchema = new mongoose.Schema({
  rBandMemberId: Number,
  rBandId: Number,
  joinDate: Date,
  lastUpdate: Date,
  active: Boolean
});

module.exports = mongoose.model('UserRBand',userRBandSchema);
