var mongoose = require('mongoose');
var connection = mongoose.connection;

var connect = function (connectionString){
  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.connect(connectionString,{ useNewUrlParser: true });

  mongoose.connection.once('open',function(){
    console.log('[SYSTEM] - Connection to database established!');
  }).on('error', function(error){
    console.log('[SYSTEM] - Connection error: '+ error);
  });
};

var close = function(){
  console.log('[SYSTEM] - Checking connection status...');
  if (mongoose.connection.readyState == 1){
    console.log('[SYSTEM] - Closing connection...');
    mongoose.connection.close();
    console.log('[SYSTEM] - Connection closed!');
  }
  else {
    console.log('[SYSTEM] - No connection was found...');
  }
}

module.exports.connection = connection;
module.exports.connect = connect;
module.exports.close = close;
