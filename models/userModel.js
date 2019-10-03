const Users = require('../db/usersSchema');

const getOne = function(name){
  return Users.find({name: name});
}

const createOne = function(user){
  return Users.create(user)
}
module.exports = {getOne, createOne};
