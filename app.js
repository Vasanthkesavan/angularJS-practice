var myApp = angular.module('app', []);

myApp.controller('AController', ['$scope', function($scope) {
  $scope.letter = '\'A\''
  $scope.type = 'uppercase'
}]);

myApp.controller('BController', ['$scope', function($scope) {
  $scope.letter = '\'b\''
  $scope.type = 'lowercase'
}]);

myApp.controller('CController', ['$scope', function($scope) {
  $scope.letter = '\'Cc\''
  $scope.type = 'both'
}]);
