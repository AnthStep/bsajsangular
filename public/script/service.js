(function(){
	const module = angular.module('chatApp');

	module.factory('service',service);

	service.$inject = [
	'$http'
	];

	function service($http){
		var service = {
			name: '',
			send(message){
				$http.post('/messages',angular.toJson(message),{headers: {'Content-Type': 'application/json'}})
			},
			getlist(succesCallback){
				 $http.get('/messages',{headers: {'Content-Type': 'application/json'}})
				.then(succesCallback,function errorCallback(response){})
			}

		};

		return service
	};
})()