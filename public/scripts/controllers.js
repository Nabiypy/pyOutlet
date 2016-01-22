'use strict';

angular.module('gyeTask.controllers',[]);


angular.module('gyeTask.controllers')
  .controller('NavCtrl', function ($scope, $location) {

    $scope.isActive = function(path){
        return path === $location.path();
    };
  });
