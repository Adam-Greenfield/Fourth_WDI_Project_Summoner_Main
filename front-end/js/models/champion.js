angular
  .module('championApp')
  .factory('Champion', Champion)

Champion.$inject = ['$resource', 'LOL'];
function Champion($resource, LOL){



}