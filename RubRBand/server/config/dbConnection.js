var dbConnectionController = require('../controllers/dbConnectionController');
var connectionString = 'mongodb://localhost/rubrband';

module.exports = function(){
  dbConnectionController.connect(connectionString);
};
