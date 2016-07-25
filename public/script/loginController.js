(function(){
	'use strict'	

	var module = angular.module('chatApp');

	module.controller('loginController', loginController);

	loginController.$inject=[
		'$location',
		'service'
	];

	function loginController($location,service){
		const lc = this;

		lc.nameSubmit = namesubmit;

		function namesubmit(){
			if(lc.name){
				service.name = lc.name;
				$location.path('/chat');
			}else{
				alert('Name pls...');
			};
		}
	};

})();