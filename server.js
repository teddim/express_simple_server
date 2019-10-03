'use strict';

const express = require('express');
const app = express();
const mainRoutes = require('./mainRoutes');
const userRoutes = require('./userRoutes');
const bodyParser = require('body-parser');
const db = require('./db/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api', mainRoutes);
app.use('/api/user', userRoutes);


app.listen('3000',function(){
  console.log('listening on port 3000');
});
