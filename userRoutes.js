const userRoutes = require('express').Router();
const userController = require('./controllers/userController');


userRoutes.get('/', function(req,res){
  console.log('params',req.params);
  console.log('query',req.query);
  res.send('please enter a name parameter');
});

//in browser try http://localhost:3000/api/user/teddi?why=because

userRoutes.get('/:name/', function(req,res){
  userController.getOne(req.params.name)
  .then(data => {
      res.send(data);
  });

});

userRoutes.post('/', function(req,res){
  userController.createOne({name: req.body.name})
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  })

})
module.exports = userRoutes;
