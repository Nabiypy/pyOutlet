 'use strict';

angular
  .module('pymdl', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',

    'gyeTask.main',
    'gyeTask.tasks',
    'gyeTask.admin',

    'leadAfrique.about',
    'leadAfrique.location',

    'gyeTask.controllers',
    'gyeTask.directives',
    'gyeTask.filters',
    'gyeTask.services',
    
    'firebase',
    'toaster',
    'angularMoment'

  ]);


angular.module('pymdl')
  .constant('FURL', 'https://gyetask.firebaseio.com/')
  .run(['$state', function($state){
      $state.go('home');
       
  }]);
