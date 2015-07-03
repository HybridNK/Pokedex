angular.module('pokedex',[])
.controller('main',['$scope',function($scope){
    $scope.page = 'Pokedex';

    $scope.open = function(){
        $scope.isOpen = true
        console.warn('abriendo pokedex')
    };
}]);
