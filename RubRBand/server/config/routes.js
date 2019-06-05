var mainController = require('../controllers/mainController');

module.exports = function(app, express){
  app.get('/',mainController.homePage);
  app.get('/home',mainController.homePage);
  app.get('/registration',mainController.registrationPage);
}
