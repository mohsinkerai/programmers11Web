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
    'main'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
  });
