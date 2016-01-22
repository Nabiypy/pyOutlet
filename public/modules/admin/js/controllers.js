'use strict'

angular.module('gyeTask.admin.controllers',[]);

angular.module('gyeTask.admin.controllers')
  .controller('AdminController', ['$scope', function ($scope, $stateParams) {
    // page title head
    $scope.registerTitle = 'Register';
    $scope.loginTitle = 'Sign-in to task';
    $scope.changepassTitle = 'Change Password';
    $scope.logoutTitle = "Sign-out safely";

  }])
    // Authentication controller
   .controller('AuthController', function ($scope, $location, $stateParams, Auth, toaster) {

     if(Auth.signedIn()){
       $location.path('/');
     }

     $scope.register = function (user) {
       Auth.register(user)
        .then(function () {
         toaster.pop('success', 'Registered successfully.');
        //  console.log("Register successfully!");
         $location.path('/browse');
       }, function (err) {
         toaster.pop('error', 'Oops, something went wrong.');
        //  console.log("Error...");
       });
     };

     $scope.login = function (user) {
       Auth.login(user)
        .then(function () {
          toaster.pop('success', 'Logged in successfully.')
          // console.log("Logged in successfully!");
          $location.path('/browse');
        }, function (err) {
          toaster.pop('error', 'Oops, something went wrong.');
          // console.log("Error...");
        });
     };

     $scope.changePassword = function (user) {
       Auth.changePassword(user)
        .then(function () {
          //reset form
          $scope.user.email = '';
          $scope.user.oldPass = '';
          $scope.user.newPass = '';

          toaster.pop('success', 'Password changed successfully!');
          // console.log("Password changed successfully");
        }, function (err) {
          toaster.pop('error', 'Oops, something went wrong.');
          // console.log("Error...");
        });
     };

   })

  //  Regulate signedIn in navbar
   .controller('NavController', function ($scope, $location, Auth, toaster) {

     $scope.currentUser = Auth.user;
     $scope.signedIn = Auth.signedIn;

     $scope.logout = function () {
       Auth.logout();
       toaster.pop('success', 'Logged out successfully.');
      //  console.log("Logged out!");
       $location.path('/');
     };

   });
