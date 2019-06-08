var mocha = require('mocha');
var assert = require('assert');
var userController = require('../../server/controllers/userController')



describe('User Controller Tests',function(){

  it('Inserts user to database',function(done){
    var userForm = {
      "username" : "testUser",
      "password" : "12345678",
      "email" : "testUser@test.com"
    };
    var userId = userController.registerUser(userForm);
    console.log('The new userId is: '+userId);
    assert( userId !== -1);
    done();
  });

});
