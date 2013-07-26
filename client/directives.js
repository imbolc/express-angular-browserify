'use strict';

var app = require('./app');

app.directive('appVersion', function (version) {
  return function (scope, elm, attrs) {
    elm.text(version);
  };
});
