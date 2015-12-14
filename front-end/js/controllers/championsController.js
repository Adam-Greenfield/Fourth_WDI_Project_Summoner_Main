angular
  .module('championApp')
  .controller('championsController', championsController)

championsController.$inject = ['$stateParams', 'Champion']
function championsController($stateParams, Champion){
  var self = this
  self.champions = championJson
  self.champion = {}

  self.setChampion = function(champion){
    self.champion = champion
    console.log(self.champion);
  }

  self.showChampion = function(){
    console.log()
  }

  // self.stopGap = function(name){
  //   console.log(name);
  //   name = name.replace(/\s+/g, '');
  //   return name;
  // }
}