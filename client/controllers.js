'use strict';

var app = require('./app');
var url4 = require('url4');

app.controller('IndexCtrl', ['$scope', function ($scope) {
  var userIDs =  ['foo', 'bar', 'baz'];
  $scope.users = userIDs.map(function (item) {
    return {
      id: item,
      url: url4('users', {id: item})
    };
  });
}]);

app.controller('UserDetailsCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.userID = $routeParams.id;
    $scope.url4 = url4;
  }]);

