(function () {
    'use strict';

    var app = angular.module('coapp');

    app.controller('HeaderCtrl', headerController);

    function headerController (AuthFactory) {
        var _this = this;

        _this.logout = function () {
            alert('asdfas');
            AuthFactory.logout();
        }
    }

})();