'use strict';

/* Filters */

var snapscripApp = angular.module('snapscripApp_filters', []);

snapscripApp.factory('deletedFilter', function() {
  return function(order) {
    return !order.deleted;
  }
});



