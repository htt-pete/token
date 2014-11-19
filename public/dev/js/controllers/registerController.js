(function(){
	angular.module('coapp').controller('registerController', regController);

	function regController($window, $location, AuthFactory){
		
		var _this = this;

		//set up
		_this.alerts = [];
		/**
		 * removes bootstrap alert
		 * @param  {[type]} index
		 * @return {[type]}
		 */		
		_this.closeAlert = function(index){
			_this.alerts.splice(index, 1);
		}
		this.register = function(user){
			_this.alerts = [];
			AuthFactory
				.register(user)
				.then(function(data){
					$location.path('/login');
				
				}, function(error){
					_this.user = {};
					var err = {
						type: 'danger',
						msg: error
					}
					_this.alerts.push(err);
					console.log(error);
				});
			}; // register
		
	}

	regController.$inject = ['$window', '$location', 'AuthFactory'];

})();