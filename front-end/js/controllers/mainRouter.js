angular
  .module('championApp')
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider, ROOT){
  $stateProvider
  .state('profile', {
    url: "/profile",
    templateUrl: ROOT + "partials/profile.html"
  })
  .state('champion', {
    url: "/champion/:id",
    templateUrl: ROOT + "partials/champion.html", controller: "championsController as champions"
  })
  .state('login', {
    url: "/login",
    templateUrl: ROOT + "partials/login.html"
  })
  .state('register', {
    url: "/register",
    templateUrl: ROOT + "partials/register.html"
  })
  .state('home', {
    url: "/",
    templateUrl: ROOT + "partials/home.html"
  })

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}