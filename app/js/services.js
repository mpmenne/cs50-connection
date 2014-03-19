'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var snapscripApp = angular.module('snapscripApp_services', []);

snapscripApp.factory('PhotoService', function() {
  var photos
  $http.get('rest/people.json').success(function(data) {
    photos = data;
  }).error(function(data) {
        alert('error retrieving photos');
  });
})
