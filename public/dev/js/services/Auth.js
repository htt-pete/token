(function(){

var coapp = angular.module('coapp');



	coapp.factory('AuthFactory', function($window, $location, $http, $q){

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

	//////////////////
	coapp.factory('AuthService', function(){

		var auth = {
			isLogged: false
		}
		return auth;
	});



	coapp.factory('TokenInterceptor', function($window, $location, $q, AuthService){

		var tokenIntercept = {};

		tokenIntercept.request = function(config){
			config.headers = config.headers || {};
			if($window.localStorage.token){
				config.headers.auth = "Bearer " + $window.localStorage.token;
			}
			return config;
		};

		tokenIntercept.reponse = function(response){
			return response || $q.when(response);
		};

		return tokenIntercept;

	});


})();








