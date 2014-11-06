'use strict';

skeletonApp.config(function($routeProvider){
    console.log("hier ben ik");
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/welcome.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
});