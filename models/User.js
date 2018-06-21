const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; //ES6 Destructured version of above line

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema); //new collection called 'users', with userSchema
