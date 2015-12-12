angular
  .module('championApp', ['angular-jwt', 'ngResource', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .constant('LOL', 'https://euw.api.pvp.net/api/lol')
  .config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
  })

