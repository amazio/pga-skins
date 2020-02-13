var express = require('express');
var path = require('path');
var logger = require('morgan');
const favicon = require('serve-favicon');

// require('dotenv').config();  // Being required in www

console.log(process.env.DATABASE_URL)

require('./config/database');
require('./config/subscribe').subscribe();

var tourneyRouter = require('./routes/api/tourney');

var app = express();

app.use(logger('dev'));
app.use(express.json({limit: '200kb'}));
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/tourney', tourneyRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
