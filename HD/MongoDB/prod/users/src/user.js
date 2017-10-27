const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String //name of type String
});

const User = mongoose.model('user', UserSchema); //makes collection called user

module.exports = User; //gives access to user model by requiring in other files
