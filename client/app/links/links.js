angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, theLinks) {
  // Your code here
  $scope.data = {
    links: theLinks
  };

});
