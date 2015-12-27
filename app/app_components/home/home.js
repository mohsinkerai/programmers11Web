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

    $scope.web = true;
    $scope.mob = true;
    $scope.site = true;

    var pattern = Trianglify({
      height: 1080,
      width: 1920,
      cell_size:100,
      variance: 0.5,
      seed: 'c6ckc',
      x_colors: 'RdBu'
    });
    var imgURL = pattern.png();
    //#99C8DF url(images/hero.jpg)center center
    $scope.introBackground = {
      "background-image": "url("+imgURL+")"
    }
    angular.element("#canvasDiv").append(pattern.canvas());

    $scope.showPortfolio = function(portfolioName){
      if(portfolioName === 'All'){
        $scope.web = true;
        $scope.app = true;
        $scope.site = true;
      }else if(portfolioName === 'Web'){
        $scope.web = true;
        $scope.app = false;
        $scope.site = false;
      }else if(portfolioName === 'App'){
        $scope.web = false;
        $scope.app = true;
        $scope.site = false;
      }else if(portfolioName === 'Site'){
        $scope.web = false;
        $scope.app = false;
        $scope.site = true;
      }
    }
  });
