angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.newLink = '';
  $scope.showSpin = false;
  $scope.lastlink;
  $scope.link = {};

  $scope.rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  

  $scope.isValidUrl = function () {

    return !$scope.newLink.match($scope.rValidUrl) && $scope.newLink;
  };
  //is valid url
  // $scope.validateLink 
  $scope.addLink = function() {
    $scope.showSpin = true;
    $scope.showBad = false;
    Links.addOne(JSON.stringify({url: $scope.newLink}))
    .then(function(data) {
      console.log(data);
      if (!data.code) {
        $scope.showBad = true;
        
      } else {
        $scope.lastlink = data;
      }
      $scope.showSpin = false;
    });
    $scope.newLink = '';
  };
});
