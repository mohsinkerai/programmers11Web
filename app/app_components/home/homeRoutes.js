'use strict';

angular.module('home.routes',['ui.router']).config(function($stateProvider){
  $stateProvider.state('home', {
      url: "/",
      views: {
        "home": {
          templateUrl: "app_components/home/home.html",
          controller: 'HomeCtrl'
        },
        "services": {
          templateUrl: "app_components/services/services.html"
        },
        "aboutus": {
          templateUrl: "app_components/aboutus/aboutus.html"
        },
        "portfolio": {
          templateUrl: "app_components/portfolio/portfolio.html",
          controller: 'HomeCtrl'
        }
      },
      controller: 'HomeCtrl'
    });
});
