angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner']
function summonersController(Summoner){
  var self = this
  self.name = ""
  self.id = ""

  self.getSummoner = function(){
    console.log('clicked');
    Summoner.getSummoner({ name: self.name }, function(data){
      console.log(data);
      console.log(data[self.name]);
      // Summoner.getRankedData({ id: self.id })
    })
  }
}