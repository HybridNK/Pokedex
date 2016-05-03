.controller('main', ['$scope', '$location', '$http', '$storage',function($scope, $location, $http, $storage) {
        $scope.page = 'Pokedex';
        $scope.pokemon = $storage.get('pkmn') || [];
        if (!$scope.pokemon.length) {
            $http.get('js/pkmn.json')
                .success(function(data) {
                    $storage.set('pkmn', data);
                    $scope.pokemon = data;
                })
        }
        $scope.getInfo = function(pkmn) {
            $scope.showInfo = true
            $location.path('/obtenerInformacion/' + pkmn.id);
        };
        $scope.close = function() {
            $scope.isOpen = false
        };
        $scope.open = function() {
            $scope.isOpen = true
        };
        $scope.hideInfo = function() {
            $location.path('')
        };
    }
])