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
		acces: {
			requiredLogin: true
		}
	});


});//config

