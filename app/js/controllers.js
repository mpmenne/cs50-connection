'use strict';
//
//var app = angular.module("app");
//
//app.controller("LeaderBoardController", function($scope) {
//
//

//});
  var app = angular.module("app", []);

  app.controller("LeaderBoardController", function($scope, $http) {

    $scope.photos = [];

    $http.get('rest/people.json').success(function(data) {
      $scope.photos = data;
    }).error(function(data) {
      alert('error retrieving photos');
    });


  })


