var mongoose = require('mongoose');
var dbConnectionController = require('../../server/controllers/dbConnectionController');
var connectionString = 'mongodb://localhost:27017/rubrband';

before(function(done){
  dbConnectionController.connect(connectionString);
  dbConnectionController.connection.on('open', function(){done();});
});
