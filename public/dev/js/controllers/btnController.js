(function () {

    'use strict';

    angular.module('coapp').controller('buttonsController', buttonsController);

    function buttonsController (AuthService, $window, $location) {
        var _this = this;

        _this.logout = function(){
        console.log($window.localStorage.token);


            if(AuthService.isLogged && $window.localStorage.token){
                AuthService.isLogged = false;
                delete $window.localStorage.token;
                console.log($window.localStorage.token);
                $location.path('login');

            }
        };
    }



})();