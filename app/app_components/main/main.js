'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('main',['main.routes'])
  .controller('MainCtrl', function ($scope) {
    $scope.mainContent = 'Main Screen';
  });
