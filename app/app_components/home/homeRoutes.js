'use strict';

angular.module('home.routes',['ui.router']).config(function($stateProvider){
  $stateProvider.state('home', {
      url: "/home",
      templateUrl: "app_components/home/home.html",
      controller: 'HomeCtrl'
    });
});
