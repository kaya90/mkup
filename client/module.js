var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('makeupController', function($scope, makeupFactory){
    $scope.makeup = makeupFactory.getMakeup(function(data) {
        $scope.makeup = data;
    });
    $scope.addMakeup = function(){
        $scope.newMakeup.filename = $scope.filename;
        console.log($scope.newMakeup);
        
        makeupFactory.addMakeup($scope.newMakeup, function(data){
            $scope.makeup = data;
        });
        $scope.makeup = makeupFactory.getMakeup(function(data) {
        $scope.makeup = data;
        });
    };
    $scope.uploadFile = function(){
        $scope.filename = event.target.files[0].name;
        console.log('file was selected: ' + $scope.filename);
    };
});

myApp.directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeFunc = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeFunc);
    }
  };
});

myApp.controller('howtoController', function($scope, howtoFactory){
});

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
    .when('/admin/makeup', {
    	templateUrl: './views/partials/admin/a_makeup.html'
    })
    .when('/admin/howto', {
        templateUrl: './views/partials/admin/a_howto.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});