(function(){
	'use strict'	

	var module = angular.module('chatApp');

	module.controller('chatController', chatController);

	chatController.$inject=[
		'service',
		'$location',
		'$interval'
	];

	function chatController(service,$location,$interval){
		const cc = this;
		!service.name ? $location.path('/login') : cc.name = service.name

		service.getlist(function(response){cc.messages = angular.fromJson(response).data});

		cc.sendHandler = sendHandler;

		function sendHandler(){
			if(cc.textMessage){
				service.send({name: cc.name, message: cc.textMessage});
				service.getlist(function(response){cc.messages = angular.fromJson(response).data});
				cc.textMessage = '';
			}
		}

		$interval(function(){
			service.getlist(function(response){cc.messages = angular.fromJson(response).data});
		}, 3000);
	};

})();