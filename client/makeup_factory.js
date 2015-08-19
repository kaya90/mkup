myApp.factory('makeupFactory', function($http) {
	var factory = {};
	var makeup = [];
	factory.getMakeup = function (callback){
		$http.get('/makeup').success(function(output) {
			makeup = output;
			callback(makeup);
		})
	}
	factory.addMakeup = function(info, callback) {
		console.log(info, "in factory");

		$http.post('/makeup', info).success(function(data){
			callback();
		});
	};
	return factory;
});