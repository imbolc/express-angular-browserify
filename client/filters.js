'use strict';

var app = require('./app');

app.filter('interpolate', function (version) {
  return function (text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
});
