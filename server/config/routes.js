var bodyParser = require("body-parser");
var makeup = require('./../controllers/makeup_c.js');
var users = require('./../controllers/users_c.js');
  module.exports = function(app) {

  	 app.use(bodyParser.json());

  	 app.get('/makeup', function(req, res) {
  	 	makeup.show(req, res);
  	 });
  	 app.post('/makeup', function(req, res) {
  	 	makeup.create(req, res);
  	 });
  	 app.post('/register', function(req, res) {
  	 	users.create(req, res);
  	 });
  };