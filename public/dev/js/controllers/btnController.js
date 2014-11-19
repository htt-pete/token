(function () {

    'use strict';

    angular.module('coapp').controller('buttonsController', buttonsController);

    function buttonsController (AuthService, $window, $location) {
        var _this = this;

        _this.loggedIn = AuthService.isLogged;
console.log(_this);
        _this.logOut = function(){
            if(AuthService.isLogged && $window.localStorage.token){
                _this.loggedIn = false;
                AuthService.isLogged = false;
                delete $window.localStorage.token;
                $location.path('/')
            }
        };
    }



})();