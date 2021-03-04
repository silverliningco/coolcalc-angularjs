app.config(function($routeProvider) {

    $routeProvider
        .when('/',{
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/teachers',{
            templateUrl: 'partials/teachers.html',
            controller: 'teachersCtrl'
        })
        .when('/coolcalc',{
            templateUrl: 'partials/coolcalc.html',
            controller: 'coolcalcCtrl'
        })
        .otherwise({
            redirectTo:'/'
        });

});