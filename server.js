var express = require('express');
var path = require('path');
var logger = require('morgan');
const favicon = require('serve-favicon');

// require('dotenv').config();  // Being required in www
require('./config/database');

// Connect to socket.io server that will provide LB updates
const socket = require('./socket');

var app = express();

app.use(logger('dev'));
app.use(express.json({limit: '200kb'}));
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/tourneys', require('./routes/api/tourney'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
