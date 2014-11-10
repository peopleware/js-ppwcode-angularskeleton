'use strict';

skeletonApp.controller('userController', function ($scope, $http) {
    $scope.helloworld = 'Hello sweet world!';
    $scope.users = [
        {
            'firstname': 'Steven',
            'lastname': 'Van Ophem'
        },
        {
            'firstname': 'Ash',
            'lastname': 'Ketchum'
        },
        {
            'firstname': 'Tyrion',
            'lastname': 'Lannister'
        }
    ];

    $http.get('json/users.json').success(function(data){
        $scope.readUsersFromJson = data;
    });

    $scope.user = initUser();
    $scope.error = '';

    function initUser() {
        return {
            email : '',
            alias: '',
            password : '',
            givenname : '',
            familyname : ''
        }
    }

    $scope.createUser = function(){
        /* Do something */
    }

});