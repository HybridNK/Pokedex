var app = angular.module('pokedex', ['ngRoute', 'ngAnimate'])
    .run(['$rootScope', function($rootScope){
        $rootScope.isOpen = false;
    }])
    .config(['$routeProvider',
        function($routeProvider) {
            var path = 'templates/';
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

        if (!$scope.pokemon.length) {
            $http.get('js/pkmn.json')
                .success(function(data) {
                   $storage.set('pkmn',data);
                   $scope.pokemon = data;
                })
        }

        $scope.getInfo = function(pkmn) {
            $scope.showInfo = true
            $location.path('/obtenerInformacion/' + pkmn.id);
        };

        $scope.close = function() {
            $scope.isOpen = false
        }

        $scope.hideInfo = function() {
            $location.path('')
        };


    }])
    .controller('informacion',['$scope','$routeParams', function($scope, $routeParams){
        $scope.isOpen = true;
        $scope.id = parseInt($routeParams.tagId,10)
    }])