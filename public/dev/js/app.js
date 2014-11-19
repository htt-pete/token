var app = angular.module('coapp', ['ngRoute', 'ui.bootstrap']);


app.config(function($routeProvider, $httpProvider){

    $routeProvider
	.when('/login', {
		templateUrl: 'dev/js/views/login.html',
		controller: 'AuthController',
		controllerAs: 'authCtrl',
		access:{
			requiredLogin: false
		}
	})
	.when('/register',{
		templateUrl: 'dev/js/views/register.html',
		controller: 'AuthController',
		controllerAs: 'authCtrl',
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
	}).otherwise({
      redirectTo: '/login'
    });;

	$httpProvider.interceptors.push('TokenInterceptor');

});//config

app.run(function($rootScope, $window, $location, AuthenticationFactory){
    AuthenticationFactory.check();

    console.log(AuthenticationFactory);

    $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute){
        if((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
            $location.path('/login');
        } else {
            if(!AuthenticationFactory.user) AuthenticationFactory.user = $window.localStorage.user;
        }
    });

    $rootScope.$on('$routeChangeSuccess', function (event, nextRoute, currentRoute){
        $rootScope.showMenu = AuthenticationFactory.isLogged;
        console.log('here');
        if (AuthenticationFactory.isLogged && $location.path() === '/login'){
            $location.path('/');
            console.log('in here');
        }
    });


});

