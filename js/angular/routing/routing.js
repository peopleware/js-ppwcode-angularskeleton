'use strict';

skeletonApp.config(function($routeProvider){
    $routeProvider
        .when('/scope', {
            templateUrl: 'pages/views/scope.html',
            controller: 'userController'
        })
        .when('/forms', {
            templateUrl: 'pages/views/form.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/scope'
        })
});