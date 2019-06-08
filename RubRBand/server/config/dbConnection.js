var dbConnectionController = require('../controllers/dbConnectionController');
var connectionString = 'mongodb://localhost:27017/rubrband';

module.exports = function(){
  dbConnectionController.connect(connectionString);
};
