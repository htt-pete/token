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



	coapp.factory('TokenInterceptor', function($window, $location, $q, AuthService, $timeout){

		var tokenIntercept = {};

		tokenIntercept.request = function(config){
			config.headers = config.headers || {};
			if($window.localStorage.token){
				config.headers.auth = "Bearer " + $window.localStorage.token;
			}
			return config;
		};

		tokenIntercept.requestError = function (rejection) {
			return $q.reject(rejection);
		};

		tokenIntercept.reponse = function(response){
			if (response != null && response.status == 200 && $window.localStorage.token && !AuthService.isLogged) {
				AuthService.isLogged = true;
			}

			return response || $q.when(response);
		};

		tokenIntercept.reponse = function(rejection){
			if(rejection !== null && rejection.status === 401 && (AuthService.isLogged || $window.localStorage.token)) {
				delete $window.localStorage.token;
				AuthService.isLogged = false;

				$location.path('#/login');
			}

			return $q.reject(rejection);
		};

		return tokenIntercept;

	});


})();








