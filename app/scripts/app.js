'use strict';

angular
  .module('workspaceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'home'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  });
