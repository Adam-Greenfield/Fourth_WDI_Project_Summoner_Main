angular
  .module('championApp', ['angular-jwt', 'ngResource', 'ui.router', 'chart.js'])
  .constant('API', 'https://secure-earth-5207.herokuapp.com/api')
  .constant('LOL', '.api.pvp.net/api/lol/')
  .constant('LOLGLOBAL', 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/')
  .constant('LOLKEY', '1b05241e-7e60-4556-a73c-2ac841ef9735')
  .config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
  })