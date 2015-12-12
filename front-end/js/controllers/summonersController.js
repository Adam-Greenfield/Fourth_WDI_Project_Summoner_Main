angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner']
function summonersController(Summoner){
  var self = this
  self.name = ""

  self.getSummoner = function(){
    console.log('clicked');
    Summoner.getSummoner(function(data){
      console.log(data);
    })
  }
}