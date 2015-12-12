angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner']
function summonersController(Summoner){
  var self = this
  self.name = ""
  self.season = "SEASON2015"

  self.getSummoner = function(){
    console.log('clicked');
    Summoner.getSummoner({ name: self.name }, function(data){
      console.log(data);
      console.log(data[self.name]);
      console.log(data[self.name].id);
      Summoner.getRankedData({ id: data[self.name].id }, function(data){
        console.log(data)
      })
    })
  }
}