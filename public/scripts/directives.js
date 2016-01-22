'use strict';

angular.module('gyeTask.directives',[]);


angular.module('gyeTask.directives')
    .directive('navbar',function(){
        return{
            restrict: 'E',
            templateUrl: 'modules/main/views/nav.tpl.html',
            controller: 'NavCtrl'
        }

});
