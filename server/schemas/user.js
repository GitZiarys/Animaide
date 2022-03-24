const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ],
    lastSearch: String,
    profileImage: {type: String, default: 'https://i.imgur.com/Geb0OcA.png'}
});

module.exports = mongoose.model('User', userSchema, 'users');