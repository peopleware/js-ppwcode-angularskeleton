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
        .when('/angularui', {
            templateUrl: 'pages/views/angularui.html',
            controller: 'userController'
        })
        .when('/jqueryui', {
            templateUrl: 'pages/views/jqueryui.html',
            controller: 'userController'
        })
        .when('/bootstrap', {
            templateUrl: 'pages/views/bootstrap.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/scope'
        })
});