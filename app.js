'use strict';

// Module dependencies
// -------------------

var express = require('express');
var browserify = require('browserify-middleware');
var http = require('http');
var path = require('path');

var routes = require('./routes');
var url4 = require('url4');
url4.urls = require('./cfg/urls');

var app = module.exports = express();


// Configuration
// -------------

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express['static'](path.join(__dirname, 'public')));
app.use(express.logger(app.get('env') === 'development' ? 'dev' : ''));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('some secret'));
app.use(express.session());
app.use(express.csrf());
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
//if (app.get('env') === 'production') {
//}

app.get('/js/app.js', browserify('./client/app.js'));


// Routes
// ------

// serve index and view partials
app.get(url4.urls.index, routes.index);
app.get(url4.urls.partials, routes.partials);

//API
//app.get('/api/cars', cars.list)
//app.get('/api/cars/total', cars.total) //placement matters
//app.get('/api/cars/:id', cars.read) //sometimes called 'show'
//app.post('/api/cars', cars.create)
//app.put('/api/cars/:id', cars.update)
//app.del('/api/cars/:id', cars.del)


// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


// Context processors
// ------------------

app.locals.url4 = url4;


// Start Server
// ------------

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
