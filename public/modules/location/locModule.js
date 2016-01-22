'use strict'

angular
	.module('leadAfrique.location',[
		'leadAfrique.location.controllers',
		'leadAfrique.location.directives',
		'leadAfrique.location.services',
		'leadAfrique.location.filters'
	]);

angular.module('leadAfrique.location')
    .config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider){
        $stateProvider
            .state('findUs',{
                url:'/contact',
                templateUrl: 'modules/location/views/find.tpl.html',
                controller: 'leadAfrique.location.controllers'
        });
	
}]);