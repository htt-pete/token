(function () {

    'use strict';

    angular.module('coapp').controller('loginController', loginController);

    function loginController ($window, $location, AuthFactory, AuthService) {
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

    	_this.login = function(user){

    		AuthFactory
    			.login(user)
    			.then(function(data){
    				AuthService.isLogged = true;
    				$window.localStorage.token = data.token;
    				$window.localStorage.user = data.user;
    				$location.path('/');


    			}, function(error){
    				_this.user = {};
    				var err = {
    					type: 'danger',
    					msg: error
    				}
    				_this.alerts.push(err);

    			});
    	};


    }

	loginController.$inject = ['$window', '$location', 'AuthFactory', 'AuthService'];

})();