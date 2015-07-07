angular.module('pokedex', ["ngRoute"])
  .config(['$routeProvider',
        function($routeProvider) {
            var path = 'templates/';
            console.log(path)
           $routeProvider
                .when('/obtenerInformacion/:tagId', {
                    templateUrl: path + 'lista.html',
                    controller: 'main'
                })
                .otherwise({
                    templateUrl: path + 'home.html',
                    controller: 'main'
                });
        }
    ])
    .controller('main', ['$scope','$location','$http',function($scope, $location, $http) {
        $scope.page = 'Pokedex';

        $http.get('js/pkmn.json')
            .success(function(data){
                console.warn(data)
                $scope.pokemon = data;
            })

        $scope.getInfo = function(pkmn){
            $scope.showInfo = true
            $location.path('/obtenerInformacion/'+pkmn.id);
        };
        $scope.open = function() {
            $scope.isOpen = true
            console.warn('abriendo pokedex')
        };
        $scope.hideInfo = function(){
           $location.path('')
        };
        $scope.close = function(){
            $scope.isOpen = false
        }
    }]);

