var bodyParser = require("body-parser");
var makeup = require('./../controllers/makeup_c.js');
  module.exports = function(app) {

  	 app.use(bodyParser.json());

  	 app.get('/makeup', function(req, res) {
  	 	makeup.show(req, res);
  	 });
  	 app.post('/makeup', function(req, res) {
  	 	makeup.create(req, res);
  	 });
  };