angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner']
function summonersController(Summoner){
  var self = this
  self.name = "Scy4"

  self.getSummoner = function(){
    console.log('clicked');
    Summoner.getSummoner({ name: self.name }, function(data){
      console.log(data);
    })
  }
}