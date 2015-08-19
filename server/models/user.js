var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	first_name: { type: String, required: true, trim: true},
	last_name: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true},
	password: { type: String, required: true, trim: true},
	created_at: {type: Date, default: Date.now}
});

mongoose.model('User', UserSchema);