var express = require("express");
var app = express();
var path= require("path");

// require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));

app.listen(8000, function() {
	console.log('listening on port 8000');
});

