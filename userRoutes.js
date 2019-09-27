const userRoutes = require('express').Router();
const userController = require('./controllers/userController');


userRoutes.get('/', function(req,res){
  console.log('params',req.params);
  console.log('query',req.query);
  res.send('please enter a name parameter');
});

//in browser try http://localhost:3000/api/user/teddi?why=because

userRoutes.get('/:name/', function(req,res){
  userController.getOne(); // if this app were hooked into a db it would be asynchronous and we would be dealing with promises or callback functions. The res.send would be in the .then or the callback function. See the promises branch for an example.
  res.send({paramreceived:req.params, queryreceived: req.query});
});

module.exports = userRoutes;
