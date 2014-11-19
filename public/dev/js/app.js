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
	});

	$httpProvider.interceptors.push('TokenInterceptor');

});//config


app.run(function($rootScope, $location, $window, AuthService){
	$rootScope.$on('$stateChangeStart', function(event, nextRoute, currentRoute){

		console.log('can get here');

		$location.path('/login');

		if(nextRoute != null && nextRoute.access != null && nextRoute.access.requiredLogin && !AuthService.isLogged && $window.localStorage.token){
			console.log('but not here');
			$location.path('/login');

		};
	})

});

app.run(function($rootScope, $window, $location, AuthService) {
  // when the page refreshes, check if the user is already logged in

  $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
    if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthService.isLogged) {
      $location.path("/login");
	    }
  });

  // $rootScope.$on('$routeChangeSuccess', function(event, nextRoute, currentRoute) {
  //   $rootScope.showMenu = AuthService.isLogged;
  //   $rootScope.role = AuthService.userRole;
  //   // if the user is already logged in, take him to the home page
  //   if (AuthService.isLogged == true && $location.path() == '/login') {
  //     $location.path('/');
  //   }
  });

