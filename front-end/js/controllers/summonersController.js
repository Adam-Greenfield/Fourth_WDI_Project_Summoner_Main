angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner', 'Champion']
function summonersController(Summoner, Champion){
  var self = this
  self.name = ""
  self.season = ""
  self.champArray = []

  self.getSummoner = function(){
    Summoner.getSummoner({ name: self.name }, function(data){
      Summoner.getRankedData({ id: data[self.name].id, season: self.season }, function(data){
        self.champArray = data.champions
        self.champArray.pop()
        console.log(self.champArray)
      })
    })
  }
}
