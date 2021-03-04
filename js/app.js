var app = angular.module('universidadApp',[ 'ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
    $scope.menuSuperior = 'partials/menu.html';

    $scope.setActive = function(Option){
        $scope.mHome      = "";
        $scope.mTeachers  = "";
        $scope.mCoolcalc     = "";

        $scope[Option] = "active";
    }

}]);