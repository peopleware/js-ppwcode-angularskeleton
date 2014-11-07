'use strict';

skeletonApp.config(function($routeProvider){
    $routeProvider
        .when('/scope', {
            templateUrl: 'pages/views/scope.html',
            controller: 'userController'
        })
        .when('/form', {
            templateUrl: 'pages/views/form.html'
        })
        .otherwise({
            redirectTo: '/scope'
        })
});