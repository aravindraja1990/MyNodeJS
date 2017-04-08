'use strict';
angular.module('cpApp.view2', []);
angular.module('cpApp.view2',['cpApp.settings']).component('homeView',{
	 templateUrl: 'components/home/home.template.html',
	 bindings:{
		 "list":"@"
	 },
	 controller: ['settings','$location', function view2Controller(settings, $location){
		 var self = this;
		 self.init = function(){
			 settings.retreive().success(function(list){
				 self.list = list;
				 console.log(list + "in component");
			 });
		 }
	 }]
});