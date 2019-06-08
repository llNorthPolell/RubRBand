var userController = require('./userController');


var homePage = function(req,res){
  console.log('[SYSTEM] - in - mainController.homePage');
  res.send('Home Page');
  console.log('[SYSTEM] - out - mainController.homePage');
};

var registrationPage = function(req,res){
  console.log('[SYSTEM] - in - mainController.registrationPage');
  res.send('Registration Page');
  console.log('[SYSTEM] - out - mainController.registrationPage');
};

var registerUser = function(req,res){
  console.log('[SYSTEM] - in - mainController.registerUser');
  userController.registerUser(req.body);
  console.log('[SYSTEM] - out - mainController.registerUser');
};


module.exports.homePage = homePage;
module.exports.registrationPage = registrationPage;
