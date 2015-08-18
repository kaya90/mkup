var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: './views/partials/main.html'
    })
    .when('/profile', {
    	templateUrl: './views/partials/profile.html'
    })
    .when('/howto',{
        templateUrl: './views/partials/howto.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});