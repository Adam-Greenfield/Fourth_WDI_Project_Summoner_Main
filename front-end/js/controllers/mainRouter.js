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

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
}