var app = angular.module('windowTest', [])
  app.controller('windowCtrl', function($scope, $window){
    $scope.message = function() {
      $window.alert('Longue vie à la Reine banshee !');
    }
  });
