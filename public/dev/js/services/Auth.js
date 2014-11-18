angular.module('coapp').factory('AuthFactory', function($window, $location, $http, $q){

	var auth = {};

		auth.login = function(user){
			
			var defer = $q.defer();

			 $http.post('/auth/login', user)
				.success(function(data){
					defer.resolve(data);
				})
				.error(function(err, status){
					defer.reject(err);
				})

			return defer.promise;
		};	

		auth.register = function(user){
			
			var defer = $q.defer();

			 $http.post('/auth/register', user)
				.success(function(data){
					defer.resolve(data);
				})
				.error(function(err, status){
					defer.reject(err);
				})

			return defer.promise;
		};	


	return auth;

});