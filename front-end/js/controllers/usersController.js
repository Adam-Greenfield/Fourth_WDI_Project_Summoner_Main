angular
  .module('championApp')
  .controller('usersController', usersController)

usersController.$inject = ['User']
function usersController(User){
  var self = this

}