angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.newLink = '';
  $scope.link = {};
  $scope.addLink = function() {
    console.log($scope.newLink);
    Links.addOne(JSON.stringify({url: $scope.newLink}));
    $scope.newLink = '';
  };
});
