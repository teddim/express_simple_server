const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
