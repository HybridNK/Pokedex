angular.module('pokedex', [])
    .controller('main', ['$scope', function($scope) {
        $scope.page = 'Pokedex';
        $scope.pokemon = [{
            'id': 1,
            'name': 'pkmn'
        }, {
            'id': 2,
            'name': 'pkmn'
        }, {
            'id': 3,
            'name': 'pkmn'
        }, {
            'id': 4,
            'name': 'pkmn'
        }, {
            'id': 5,
            'name': 'pkmn'
        }, {
            'id': 6,
            'name': 'pkmn'
        }, {
            'id': 7,
            'name': 'pkmn'
        }, {
            'id': 8,
            'name': 'pkmn'
        }];

        $scope.getInfo = function(){
            console.log(arguments)
            //alert(JSON.stringify(data))

        };
        $scope.open = function() {
            $scope.isOpen = true
            console.warn('abriendo pokedex')
        };
    }]);