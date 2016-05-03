.controller('informacion', ['$scope', '$routeParams', '$http',function($scope, $routeParams, $http) {
        $scope.isOpen = true;
        $scope.Math = window.Math;
        $scope.id = parseInt($routeParams.tagId, 10)

        $http.get('http://pokeapi.co/api/v1/description/' + $scope.id)
            .success(function(data) {
                $scope.descripcion = data.description
            });

        $http.get('http://pokeapi.co/api/v1/pokemon/' + $scope.id)
            .success(function(data) {
                $scope.pkmn = data;
            });


    }
])