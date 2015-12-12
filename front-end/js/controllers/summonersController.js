angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner']
function summonersController(Summoner){

  this.name = ""

}