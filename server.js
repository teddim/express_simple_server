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




/* ********************************************************
Gracefully shutdown mongoose connection when nodemon restarts
https://github.com/simonholmes/getting-MEAN/blob/chapter-10/app_api/models/db.js#L33
*********************************************************/
const mongoose = require('mongoose');

const gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
