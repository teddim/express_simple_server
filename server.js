'use strict';

var express = require('express');
var app = express();
var mainRoutes = require('./mainRoutes');
var userRoutes = require('./userRoutes');

const bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', mainRoutes);
app.use('/api/user', userRoutes);


app.listen('3000',function(){
  console.log('listening on port 3000');
});
