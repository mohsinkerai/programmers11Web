'use strict';

angular.module('main.routes',['ui.router']).config(function($stateProvider){
  $stateProvider.state('main', {
      url: "/main",
      templateUrl: "app_components/main/state1.html",
      controller: 'MainCtrl'
    });
});
