angular
  .module('championApp')
  .controller('championsController', championsController)

championsController.$inject = ['$stateParams', '$location', 'Champion']
function championsController($stateParams, $location, Champion){
  var self = this
  self.champions = championJson
  self.champion = {}

  self.setChampion = function(champion){
    self.champion = champion
    console.log(self.champion);
  }

  self.showChampion = function(){
    console.log("hi")
    console.log(self.champion)
  }

  self.stopGap = function(name){
    console.log(name);
    if(name.match(/\s/)){
    name = name.replace(/\s+/g, '');
    }
    return name;
  }
}