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
  self.skillLevel = function(champion){
    console.log(champion.stats);
    var stats = champion.stats;
    var percentWon = (stats.totalSessionsWon) / (stats.totalSessionsPlayed) * 100;
    var killParticipation = parseInt(((stats.totalAssists) + (stats.totalChampionKills)) /
     ((stats.totalDeathsPerSession) + (stats.totalChampionKills) + (stats.totalAssists))
     * 100);
    var pentaCheck = stats.totalPentaKills;
    var skillPercent = (percentWon + killParticipation) / 2

    champion.pentaCheck = pentaCheck;
    champion.percentWon = percentWon;
    champion.killParticipation = killParticipation;
    champion.skillPercent = skillPercent;
    return champion;
  }
}
