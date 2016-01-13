angular
  .module('championApp')
  .controller('usersController', usersController)

usersController.$inject = ['User', 'TokenService', '$location', '$scope', '$timeout']
function usersController(User, TokenService, $location, $scope, $timeout){
  var self = this
  self.all = [];
  self.user = {};

  function userLogIn(res){
    var token = res.token ? res.token : null
    if(token){
      self.user = TokenService.getUser();
      window.location.assign("/");
    }
  }
  self.login = function(){
    User.login(self.user, userLogIn);
  }
  self.register = function() {
    User.register(self.user, userLogIn);
  }
  self.logOut = function(){
    TokenService.removeToken();
    self.all = [];
    self.user = {};
  }
  self.isLoggedIn = function(){
    return !!TokenService.getToken();
  }

  if(self.isLoggedIn()){
    self.user = TokenService.getUser();
  }
}