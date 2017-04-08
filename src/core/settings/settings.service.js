angular.module('cpApp.settings').
service('settings', ['$http', function($http){
		this.cached = function(){
			 $http.get('./data/list.json').success(function(list){
				return list;
			});
		};
		this.retreive =  function(){
			return  $http.get('./data/list.json');
		};
}]);