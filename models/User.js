const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; //ES6 Destructured version of above line

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema); //new collection called 'users', with userSchema
