const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    unique: true, // To prevent duplicate values
    type: String
  },
  password: String,
  name: String,
  img: String
  //todos: [{title: String, isCompleted: Boolean}] // Putting to-dos here will be better than having a separate to_do collection.
})

const User = mongoose.model('user', userSchema);
module.exports = User;