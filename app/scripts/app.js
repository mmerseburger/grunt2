'use strict';

/**
 * @ngdoc overview
 * @name calcardApp
 * @description
 * # calcardApp
 *
 * Main module of the application.
 */
angular
  .module('calcardApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/identificacao', {
        templateUrl: 'views/identificacao.html',
        controller: 'IdentificacaoCtrl',
        controllerAs: 'identificacao'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
