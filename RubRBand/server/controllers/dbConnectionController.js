var mongoose = require('mongoose');


var connect = function (connectionString){
  mongoose.connect(connectionString);

  mongoose.connection.once('open',function(){
    console.log('[SYSTEM] - Connection to database established!');
  }).on('error', function(error){
    console.log('[SYSTEM] - Connection error: '+ error);
  });
};


module.exports.connect = connect;
