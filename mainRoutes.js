let mainRoutes = require('express').Router();


mainRoutes.get('/', function(req,res,next) {
    console.log("query",req.query);
    res.status(200);
    res.send("hello world");
});

mainRoutes.post('/', function(req,res,next) {
    let response = '';
    if (req.body === undefined || Object.keys(req.body).length === 0) {
      response = `I didn't see anything anything in the body`;
    } else {
      response = 'message received';

    }
    res.send(response);
});

module.exports = mainRoutes;
