var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = ( function() {
	return {
		create: function(req, res) {
			console.log(req.body);
			var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password});
			user.save(function (err, results) {
				if(err) {return handleError(err);}
				else {
					res.json(results);
				}
			})
		}
	}

})();