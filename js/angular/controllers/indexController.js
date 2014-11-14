'use strict';

skeletonApp.controller('indexController', function ($scope) {
    $scope.navlink = 'pages/partials/navigation.html';
    $scope.formlink = 'pages/partials/forms/basic.html';
    $scope.modallink = 'pages/partials/modals.html';

    $scope.changePage = function(destination){
        switch(destination){
            case 'basicform':
                $scope.formlink = 'pages/partials/forms/basic.html';
                break;
            case 'validationform':
                $scope.formlink = 'pages/partials/forms/validation.html';
                break;
            default:
                $scope.formlink = 'pages/apartials/forms/basic.html';
        }
    }
});