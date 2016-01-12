angular
  .module('championApp')
  .controller('usersController', usersController)

usersController.$inject = ['User', 'TokenService', '$location', '$scope']
function usersController(User, TokenService, $location, $scope){
  var self = this
  self.all = [];
  self.user = {};

  function userLogIn(res){
    var token = res.token ? res.token : null
    if(token){
      self.user = TokenService.getUser();
      $location.path('/');
      console.log(self.user)
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
    console.log(self.user)
    $location.path('/login')
  }
  self.isLoggedIn = function(){
    return !!TokenService.getToken();
  }

  if(self.isLoggedIn()){
    self.user = TokenService.getUser();
    console.log(self.user.local);

  }
}