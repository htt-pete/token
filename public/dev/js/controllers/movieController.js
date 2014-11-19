(function () {
    'use strict';

    var coapp = angular.module('coapp');

    coapp.controller('movieController', function($http){
        var _this = this;

        _this.movies = [{title:'Avatar', rating: 5}];

        // $http.get('/api/movies')
        //     .success(function(data){
        //         _this.movies = data;
        //     });


    });

})();