const userModel = require('../models/userModel');

const getOne = function(){
  //may want to do something with what you get back from the model before returning
  return userModel.getOne()
  .then(data => {

    return {...data, anotherthing: 'hello world'};
  });
}

module.exports = {getOne};
