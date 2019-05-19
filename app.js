// server.js
const express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Connect to mongoDB database
var mysql = require('mysql');

var indexRouter = require('./routes/indexRoute');
var customersRouter = require('./routes/customersRoute');

var app = express();

app.use(function (req, res, next) {
	res.locals.connection = mysql.createConnection({
		host: 'remotemysql.com',
		user: 'Rgp5U8PCDq',
		password: 'DQgiKXd9QI',
		database: 'Rgp5U8PCDq'
	});
	res.locals.connection.connect(function(err) {
		if (err) {
		  console.error('error connecting: ' + err.stack);
		  return;
		}
	  
		console.log('connected as id ' + res.locals.connection.threadId);
	  });
	next();
});

//  Serve frontend view
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// Specify backend route
app.use('/', indexRouter);
app.use('/api/v1/customers', customersRouter);

module.exports = app;
