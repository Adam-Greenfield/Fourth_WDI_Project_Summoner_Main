angular
  .module('championApp')
  .controller('summonersController', summonersController)

summonersController.$inject = ['Summoner', 'TokenService']
function summonersController(Summoner, TokenService){
  var self = this
  self.user = ""
  self.name = ""
  self.season = ""
  self.champArray = []
  self.region = ""

  console.log(self.user);

  self.getAttributes = function(user){
    self.name = user.local.username
  }
  // self.isLoggedIn = function(){
  //   return !!TokenService.getToken();
  // }

  // if(self.isLoggedIn()){
  //   self.getSummoner();
  // }

  self.getSummoner = function(){
    Summoner.getSummoner({ name: self.name, region: self.region }, function(data){
      console.log(data)
      Summoner.getRankedData({ id: data[self.name].id, season: self.season, region: self.region }, function(data){
        self.champArray = data.champions
        self.champArray.pop()
        console.log(self.champArray)
        console.log(championJson)
        console.log(self.name)

      })
    })
  }
}
