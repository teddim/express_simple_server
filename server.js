'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', function(req,res){
  console.log("query",req.query);
  res.status(200);
  res.send(req.query);
});


app.get('/user/:name', function(req,res){
  console.log("params",req.params);
  console.log("query",req.query);
  res.send(req.params);
});

app.listen('3000',function(){
  console.log("listening on port 3000");
});
