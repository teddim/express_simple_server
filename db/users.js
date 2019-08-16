//this is obviously not a real db. We are just returning a promise to practice working with them.

function find(name){
  const promise = new Promise((resolve,reject)=> {
    if(true) {
      resolve({id:5, name: name});
    }
    else {
      reject("something went wrong");
    }
  })
  return promise; //this function returns a promise
}

module.exports = {find};
