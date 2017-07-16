var myApp = angular.module('app', []);
var $injector = angular.injector();


myApp.factory('Data', function() {
  return {Field: 'ABC'};
})

myApp.controller('AController', ['$scope','Data', function($scope, Data) {
  $scope.name = Data.Field;
  $scope.relation = 'Mother'
}]);

myApp.controller('BController', ['$scope','Data', function($scope, Data) {
  $scope.name = Data.Field;
  $scope.relation = 'Sister'
}]);

myApp.controller('CController', ['$scope', 'Data', function($scope, Data) {
  $scope.name = Data.Field;
  $scope.relation = 'Wife'
}]);


/* https://stackoverflow.com/questions/21919962/share-data-between-angularjs-controllers */