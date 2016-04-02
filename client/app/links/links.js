angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  // $scope.filterBar = '';

  $scope.init = function() {
    Links.getAll().then(function(allLinks) {
      $scope.data.links = allLinks;
    });
  };

  $scope.init();


});
