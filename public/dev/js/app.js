var app = angular.module('coapp', ['ngRoute', 'ui.bootstrap']);


app.config(function($routeProvider, $httpProvider){

$routeProvider
	.when('/login', {
		templateUrl: 'dev/js/views/login.html',
		controller: 'loginController',
		controllerAs: 'loginCtrl',
		access:{
			requiredLogin: false
		}
	})
	.when('/register',{
		templateUrl: 'dev/js/views/register.html',
		controller: 'registerController',
		controllerAs: 'registerCtrl',
		access:{
			requiredLogin: false
		}
	})
	.when('/movies', {
		templateUrl: 'dev/js/views/movies.html',
		controller: 'movieController',
		controllerAs: 'movieCtrl',
		access: {
			requiredLogin: true
		}
	})
	.when('/',{
		templateUrl: 'dev/js/views/loginRegBtn.html',
		controller: 'buttonsController',
		controllerAs: 'btnCtrl',
		access: {
			requiredLogin: false
		}
	});

	$httpProvider.interceptors.push('TokenInterceptor');

});//config


app.run(function($rootScope, $location, $window, AuthService){
	$rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
		if(nextRoute != null && nextRoute.access != null && nextRoute.access.requiredLogin && !AuthService.isLogged && $window.localStorage.token){
			$location.path('/login');
		};
	})

});

