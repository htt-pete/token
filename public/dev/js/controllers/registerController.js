(function(){
angular.module('coapp').controller('registerController', regController);

function regController($window, $location, AuthFactory){

	var _this = this;

	this.register = function(user){
console.log("register");
		AuthFactory
			.register(user)
			.then(function(data){
				$location.path('/login');
			
			}, function(error){
				console.log(error);
			});
	};
	
}

regController.$inject = ['$window', '$location', 'AuthFactory'];


})();