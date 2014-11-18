angular.module('coapp').controller('loginController', function($window, $location, AuthFactory){

	var _this = this;

	this.login = function(user){

		AuthFactory
			.login(user)
			.then(function(data){
				$window.localStorage.token = data.token;
				$window.localStorage.user = data.user;
				console.log($window.localStorage);
			
			}, function(error){
				console.log(error);
			});
	};
	
});