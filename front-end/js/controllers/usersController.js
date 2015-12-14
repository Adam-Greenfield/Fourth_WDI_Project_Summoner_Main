angular
  .module('championApp')
  .controller('usersController', usersController)

usersController.$inject = ['User']
function usersController(User){
  var self = this

  self.all = [];
  self.user = {};

  function userLogIn(res){
    var token = res.token ? res.token : null
    if(token){
      console.log(res);
      self.getUsers();
      self.user = TokenService.getUser();
      $location.path('/');
    }
  }
  self.login = function(){
    console.log('login')
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
    self.getUsers();
    self.user = TokenService.getUser();
    console.log(self.user);
  }
}