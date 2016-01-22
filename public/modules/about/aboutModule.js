'use strict'

angular
    .module('leadAfrique.about',[
        'leadAfrique.about.controllers',
        'leadAfrique.about.directives',
        'leadAfrique.about.services',
        'leadAfrique.about.filters'
    ]);

angular.module('leadAfrique.about')
    .config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider){
        $stateProvider
            .state('director',{
                url:'/ourleaders',
                templateUrl: 'modules/about/views/ourleaders.html',
                
            })
            .state('about',{
                url:'/leadafrique',
                templateUrl: 'modules/about/views/leadafrique.html',
            
            })
	
}]);

