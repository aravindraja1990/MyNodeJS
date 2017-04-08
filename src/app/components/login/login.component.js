'use strict';

angular.module('cpApp.login',['cpApp.settings']).component('loginView',{
	 templateUrl: 'components/login/login.template.html',
	 bindings:{
		 username: "<",
		 password: "<"
	 },
	 controller: ['settings','$location', function loginController(settings, $location){
		 var self = this;
		 self.validateUser = function(){
			 console.log("Username" + self.username);
			 console.log("Password" + self.password);	
			 //Navigate upon successful authentication
			$location.path("/view2");
		 }
		
	 }]
});
