var homePage = function(req,res){
  console.log('[SYSTEM] - in - mainController.homePage');
  res.send('Home Page');
  console.log('[SYSTEM] - out - mainController.homePage');
}

var registrationPage = function(req,res){
  console.log('[SYSTEM] - in - mainController.registrationPage');
  res.send('Registration Page');
  console.log('[SYSTEM] - out - mainController.registrationPage');
}

module.exports.homePage = homePage;
module.exports.registrationPage = registrationPage;
