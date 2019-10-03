const userModel = require('../models/userModel');

const getOne = function(name){
  //may want to do something with what you get back from the model before returning. If so, use .then here.
  return userModel.getOne(name);
}

const createOne = function(user){
  return userModel.createOne(user);
}
module.exports = {getOne, createOne};
