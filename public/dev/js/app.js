var app = angular.module('coapp', ['ngRoute', 'ui.bootstrap']);


app.config(function($routeProvider, $httpProvider){

$routeProvider
	.when('/login', {
		templateUrl: 'dev/js/views/login.html',
		//controller: LoginCtrl,
		access:{
			requiredLogin: false
		}
	}).when('/register',{
		templateUrl: 'dev/js/views/register.html',
		//controller: registerCtrl,
		access:{
			requiredLogin: false
		}
	});


});//config

