'use strict';

var urls = require('../cfg/urls');
var url4 = require('url4');
url4.urls = urls;

var app = module.exports = angular.module('app', []);


app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider.
      when(urls.index, {
        templateUrl: url4('partials', {name: 'index'}),
        controller: 'IndexCtrl'
      })
      .when(urls.users, {
        templateUrl: url4('partials', {name: 'users'}),
        controller: 'UserDetailsCtrl'
      })
      .otherwise({
        redirectTo: urls.index
      });

    $locationProvider.html5Mode(true);
  }]);


require('./controllers.js');
require('./directives.js');
require('./filters.js');
require('./services.js');
