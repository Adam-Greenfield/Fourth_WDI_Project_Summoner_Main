angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner', 'TokenService']
function summonersController(Summoner, TokenService){
  var self = this
  self.user = ""
  self.name = ""
  self.season = "SEASON2015"
  self.champArray = []
  self.region = ""

  self.getAttributes = function(user){
    self.name = user.local.username
  }

  self.getSummoner = function(){
    self.user = TokenService.getUser();
    self.name = self.user.local.username.toLowerCase()
    self.region = self.user.local.region
    Summoner.getSummoner({ name: self.name, region: self.region }, function(data){
      Summoner.getRankedData({ id: data[self.name].id, season: self.season, region: self.region }, function(data){
        self.champArray = data.champions
        self.champArray.pop()
        self.constructDataModel()
      })
    })
  }

  self.constructDataModel = function(){
    console.log(self.champArray);
    self.champArray.forEach(function(champion){
      self.skillLevel(champion);
    })
  }
}
