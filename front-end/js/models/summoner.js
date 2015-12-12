angular
  .module('championApp')
  .factory('Summoner', Summoner)

Summoner.$inject = ['$resource', 'LOL', 'LOLKEY'];
function Summoner($resource, LOL, LOLKEY){

  // name = 'Scy4'

  return $resource(LOL, { api_key: LOLKEY, name: '@name' }, {
    'getSummoner': {
      method: 'GET',
      url: LOL + '/v1.4/summoner/by-name/:name'
    }
  })

}