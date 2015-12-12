angular
  .module('userApp')
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "/partials/home.html"
  })
  .state('login', {
    url: "/login",
    templateUrl: "/partials/login.html"
  })
  .state('new', {
    url: "/new",
    templateUrl: "/partials/new.html"
  })
  .state('profile', {
    url: "/profile",
    templateUrl: "/partials/profile.html"
  })
  .state('champion', {
    url: "/champion",
    templateUrl: "/partials/champion.html"
  })

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}