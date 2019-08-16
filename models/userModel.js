const db = require('../db/users');

const getOne = function(){
  return db.find('teddi');
  // return result;
}
module.exports = {getOne};
