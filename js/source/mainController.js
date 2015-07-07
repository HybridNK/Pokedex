var app = angular.module('pokedex', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider',
        function($routeProvider) {
            var path = 'templates/';
            console.log(path)
            $routeProvider
                .when('/informacion/:tagId', {
                    templateUrl: path + 'lista.html',
                    controller: 'informacion'
                })
                .otherwise({
                    templateUrl: path + 'home.html',
                    controller: 'main'
                });
        }
    ])
    .factory('$storage', function() {
        return {
            data: [],
            set: function(index, data) {
                this.data[index] = data;
            },
            get: function(index) {
                return this.data[index] || [];
            }
        }
    })
    .controller('main', ['$scope', '$location', '$http', '$storage', function($scope, $location, $http, $storage) {
        $scope.page = 'Pokedex';
        $scope.pokemon = $storage.get('pkmn') || [];
        console.log($scope.pokemon)
        if (!$scope.pokemon.length) {
            $http.get('js/pkmn.json')
                .success(function(data) {
                   $storage.set('pkmn',data);
                   $scope.pokemon = data;
                })
        }
        console.log($scope.pokemon.length)

        $scope.getInfo = function(pkmn) {
            $scope.showInfo = true
            $location.path('/obtenerInformacion/' + pkmn.id);
        };

        $scope.open = function() {
            $scope.isOpen = true
            console.warn('abriendo pokedex')
        };
        $scope.hideInfo = function() {
            $location.path('')
        };
        $scope.close = function() {
            $scope.isOpen = false
        }
    }])
    .controller('informacion',['$scope','$routeParams', function($scope, $routeParams){
        console.log($routeParams)
        $scope.id = parseInt($routeParams.tagId,10)
    }])