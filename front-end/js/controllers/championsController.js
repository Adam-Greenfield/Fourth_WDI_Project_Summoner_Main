angular
  .module('championApp')
  .controller('championsController', championsController)

championsController.$inject = ['Champion']
function championsController(Champion){
  var self = this
  self.champions = championJson


  // self.stopGap = function(name){
  //   console.log(name);
  //   name = name.replace(/\s+/g, '');
  //   return name;
  // }
}