angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner', 'Champion']
function summonersController(Summoner, Champion){
  var self = this
  self.name = ""
  self.season = ""
  self.champArray = []
  self.region = ""

  self.getSummoner = function(){
    Summoner.getSummoner({ name: self.name, region: self.region }, function(data){
      Summoner.getRankedData({ id: data[self.name].id, season: self.season, region: self.region }, function(data){
        self.champArray = data.champions
        self.champArray.pop()
        console.log(self.champArray)
        console.log(championJson)

      })
    })
  }
}
