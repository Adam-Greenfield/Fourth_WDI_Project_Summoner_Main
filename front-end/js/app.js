angular
  .module('championApp', ['angular-jwt', 'ngResource', 'ui.router'])
  .constant('API', 'https://secure-earth-5207.herokuapp.com/api')
  .constant('ROOT', window.location.hostname.match('localhost') ? 'http://localhost:8000/' : 'http://adam-greenfield.github.io/Fourth_WDI_Project_Summoner_Main/front-end/');  
  .constant('LOL', '.api.pvp.net/api/lol/')
  .constant('LOLGLOBAL', 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/')
  .constant('LOLKEY', '1b05241e-7e60-4556-a73c-2ac841ef9735')
  .config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
  })