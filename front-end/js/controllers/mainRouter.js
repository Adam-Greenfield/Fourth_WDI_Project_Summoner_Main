angular
  .module('championApp')
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
  .state('profile', {
    url: "/profile",
    templateUrl: "/partials/profile.html"
  })
  .state('champion', {
    url: "/champion/:id",
    templateUrl: "/partials/champion.html", controller: "championsController as champions"
  })
  .state('login', {
    url: "/login",
    templateUrl: "/partials.login.html"
  })
  .state('register', {
    url: "/register",
    templateUrl: "/partials/register.html"
  })

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}