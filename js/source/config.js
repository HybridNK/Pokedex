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