'use strict'

angular.module('gyeTask.tasks.controllers',[]);

angular.module('gyeTask.tasks.controllers')
  .controller('TaskController', function ($scope, $location, toaster, Task, Auth) {

    $scope.createTask = function () {
      $scope.task.status   = 'open';
      $scope.task.gravatar = Auth.user.profile.gravatar;
      $scope.task.name     = Auth.user.profile.name;
      $scope.task.poster   = Auth.user.uid;

      Task.createTask($scope.task).then(function (ref) {
        toaster.pop('success', 'Task created successfully.');
        $scope.task = {
          title:       '',
          description: '',
          total:       '',
          status:      'open',
          gravatar:    '',
          name:        '',
          poster:      ''
        };
        $location.path('/browse/' + ref.key());
      });
    };

    $scope.editTask = function (task) {
      Task.editTask(task).then(function () {
        toaster.pop('success', 'Task is updated.');
      });
    };

  })

  .controller('BrowseController', function ($scope, $stateParams, toaster, Task, Auth) {
    $scope.searchTask = '';
    $scope.tasks      = Task.all;
    $scope.signedIn   = Auth.signedIn;
    $scope.listMode   = true;

    if ($stateParams.taskId) {
      var task = Task.getTask($stateParams.taskId).$asObject();
      $scope.listMode = false;
      setSelectedTask(task);
    }

    function setSelectedTask(task) {
      $scope.selectedTask = task;

      if ($scope.signedIn()) {
        $scope.isTaskCreator = Task.isCreator; /* Check if the current login user is the creator of selected task*/
        $scope.isOpen = Task.isOpen; //is the selected task open?
      }
    };

    // Cancel task
    $scope.cancelTask = function (taskId) {
      Task.cancelTask(taskId).then(function() {
        toaster.pop('success', "This task is cancelled successfully.");
      });
    };

  });
