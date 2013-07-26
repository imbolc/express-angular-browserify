'use strict';

var app = require('./app');

// Demonstrate how to register services
// In this case it is a simple value service.
app.value('version', '0.1');
