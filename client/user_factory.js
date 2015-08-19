myApp.factory('userFactory', function($http) {
	var factory = {};
	var user = [];
	factory.addUser = function(info, callback) {
		$http.post('/register', info).success(function(data){
			callback(data);
		});
	};
	return factory;
});