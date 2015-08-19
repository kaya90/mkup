var mongoose = require('mongoose');
var Makeup = mongoose.model('Makeup');

module.exports = ( function() {
	return {
		show: function(req, res) {
			Makeup.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			});
		},
		create: function(req, res) {
			console.log(req.body);
			var makeup = new Makeup({brand: req.body.brand, name: req.body.name, color: req.body.color, price: req.body.price, type: req.body.type, filename: req.body.filename})
			makeup.save(function (err, results) {
				if (err) {return handleError(err);}
				else {
					res.json(results);
				}
			})
			// if ( req.body.price ) {
			//     req.assert('price', 'Enter a price (numbers only)').regex(/^\d+(\.\d{2})?$/);
			// }
			// var makeup = new Makeup({})
		}
	}
})();