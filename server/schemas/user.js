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
    profileImage: String
});

module.exports = mongoose.model('User', userSchema, 'users');