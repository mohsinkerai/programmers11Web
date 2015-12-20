'use strict';

angular.module('home.routes',['ui.router']).config(function($stateProvider){
  $stateProvider.state('home', {
      url: "/home",
      templateUrl: "app_components/main/home.html",
      controller: 'HomeCtrl'
    });
});
