const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    googleId: String,
    email: String,
    thumbnail: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;