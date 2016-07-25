(function(){
	var module=angular.module('chatApp',['ngRoute']);
	module.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/login',{
				templateUrl: '../login.html',
				controller: 'loginController',
				controllerAs: 'login'
			})
			.when('/chat',{
				templateUrl: '../chat.html',
				controller: 'chatController',
				controllerAs: 'chat'
			})
			.otherwise({
				redirectTo: '/login'
			})

	}]);
})();