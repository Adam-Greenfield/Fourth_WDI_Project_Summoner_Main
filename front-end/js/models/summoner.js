angular
  .module('championApp')
  .factory('Summoner', Summoner)

Summoner.$inject = ['$resource', 'LOL'];
function Summoner($resource, LOL){

  return $resource(LOL, null, {
    'getSummoner': {
      method: 'GET',
      url: LOL + '/v1.4/sumonner/by-name/' + Summoner.name
    }
  })

}