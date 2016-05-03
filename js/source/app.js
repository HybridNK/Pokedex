var app = angular.module('pokedex', ['ngRoute', 'ngAnimate'])
    .run(['$rootScope', function($rootScope){
        $rootScope.isOpen = false;
    }])
