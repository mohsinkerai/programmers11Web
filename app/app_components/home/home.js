'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('home',['home.routes'])
  .controller('HomeCtrl', function ($scope) {
    $scope.mainContent = 'Main Screen';
  });
