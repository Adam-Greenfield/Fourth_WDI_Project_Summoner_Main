angular
  .module('championApp', ['angular-jwt', 'ngResource', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .constant('LOL', 'https://euw.api.pvp.net/api/lol/euw')
  .constant('LOLKEY', '1b05241e-7e60-4556-a73c-2ac841ef9735')
  // .config(function($httpProvider){
  //   $httpProvider.interceptors.push('AuthInterceptor');
  // })

var name = ""