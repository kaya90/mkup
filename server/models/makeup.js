var mongoose = require('mongoose');

var MakeupSchema = new mongoose.Schema({
	filename: { type: String, required: true},
	brand: { type: String, required: true },
	name: { type: String, required: true},
	color: { type: String, required: true},
	type: {type: String, required: true},
	price: {type: Number, get: getPrice, set: setPrice }
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

mongoose.model('Makeup', MakeupSchema);