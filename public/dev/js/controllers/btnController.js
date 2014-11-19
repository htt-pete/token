(function () {

    'use strict';

    angular.module('coapp').controller('buttonsController', buttonsController);

    function buttonsController (AuthenticationFactory, $window, $location) {
        var _this = this;

        _this.logout = function(){
        console.log($window.localStorage.token);


            if(AuthenticationFactory.isLogged && $window.localStorage.token){
                AuthenticationFactory.isLogged = false;
                delete $window.localStorage.token;
                console.log($window.localStorage.token);
                $location.path('login');

            }
        };
    }



})();