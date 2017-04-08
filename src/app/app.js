// Declare app level module which depends on views, and components
angular.module('cpApp', [
  'ngRoute',
  'cpApp.login',
  'cpApp.view2',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/login', {
	    template: '<login-view></login-view>',
	  })
	.when('/view2', {
		template: '<home-view></home-view>',
  });
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
