let userRoutes = require('express').Router();

userRoutes.get('/', function(req,res){
  console.log('params',req.params);
  console.log('query',req.query);
  res.send('please enter a name parameter');
});

//in browser try http://localhost:3000/api/user/teddi?why=because
userRoutes.get('/:name', function(req,res){
  console.log('params',req.params);
  console.log('query',req.query);
  res.send({paramreceived:req.params, queryreceived: req.query});
});

module.exports = userRoutes;
