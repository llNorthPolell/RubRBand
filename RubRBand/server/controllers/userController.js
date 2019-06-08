var User = require('../models/user');

var registerUser = function(newUserInfo){
  console.log('[SYSTEM] - in - userController.registerUser');
  var saveUser = new User({
    username : newUserInfo.username,
    password : newUserInfo.password,
    email : newUserInfo.email
  });
  console.log('[SYSTEM] - saving user '+ saveUser.username + ' to database...');
  saveUser.save().then(function(err, doc, num){
      console.log('[SYSTEM] - user is successfully saved!');
  }).catch(function (err) {
      console.log('[ERROR] - An error has occurred while saving: '+ err.code + ' - '+ err.name);
  });

  console.log('[SYSTEM] - out - userController.registerUser');
  return saveUser._id;
};

module.exports.registerUser = registerUser;
