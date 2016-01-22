'use strict'

angular
	.module('gyeTask.main',[
		'gyeTask.main.controllers',
		'gyeTask.main.directives',
		'gyeTask.main.services',
		'gyeTask.main.filters'
	]);


angular.module('gyeTask.main')
    .config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider){
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: 'modules/main/views/main.html',

        });

}]);
