'use strict'

angular
	.module('gyeTask.tasks',[
		'gyeTask.tasks.controllers',
		'gyeTask.tasks.directives',
		'gyeTask.tasks.services',
		'gyeTask.tasks.filters',
		'gyeTask.admin'
	]);


    angular.module('gyeTask.tasks')
    .config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider){
        $stateProvider
			.state('browseTasks',{
				url:'/browse',
				templateUrl: 'modules/task/views/browse.html',
				controller: 'BrowseController'
			})
            .state('browseTask',{
                url:'/browse/:taskId',
                templateUrl: 'modules/task/views/browse.html',
				controller: 'BrowseController'
            });

}]);
