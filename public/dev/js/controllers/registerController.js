(function(){
	angular.module('coapp').controller('registerController', regController);

	function regController($window, $location, AuthFactory){

		var _this = this;

	this.register = function(user){
		AuthFactory
			.register(user)
			.then(function(data){
				$location.path('/login');
			
			}, function(error){
				console.log(error);
			});
		}; // register
	
	}

	regController.$inject = ['$window', '$location', 'AuthFactory'];

})();