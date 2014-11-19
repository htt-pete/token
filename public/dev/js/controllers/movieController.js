(function () {
    'use strict';

    var coapp = angular.module('coapp');

    coapp.controller('movieController', function($http){
        var _this = this;

        $http.get('/api/movies')
            .success(function(data){
                _this.movies = data;
            });


    });

})();