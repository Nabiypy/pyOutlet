'use strict'

angular
	.module('gyeTask.admin',[
		'gyeTask.admin.controllers',
		'gyeTask.admin.directives',
		'gyeTask.admin.services',
		'gyeTask.admin.filters'
	]);

	angular.module('gyeTask.admin')
	    .config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider){
	        $stateProvider
	            .state('registerUser',{
	                url:'/register',
	                templateUrl: 'modules/admin/views/register.html',
					controller: 'AuthController'
	             })
				.state('signinUser',{
					 url: '/login',
					 templateUrl: 'modules/admin/views/login.html',
					 controller: 'AuthController'
				});


	}]);
