var express = require('express');
var dbConnection = require('./config/dbConnection');
var middleware = require('./config/middleware');
var routes = require('./config/routes')



var app = express();

dbConnection();
middleware(app,express);
routes(app,express);


module.exports = app;
