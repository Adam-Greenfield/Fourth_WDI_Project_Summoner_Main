angular
  .module('championApp')
  .factory('Summoner', Summoner)

Summoner.$inject = ['$resource', 'LOL'];
function Summoner($resource, LOL){

  return $resource(LOL, null, {
    'getSummoner': {
      method: 'GET',
      url: LOL + '/v1.4/summoner/by-name/' + 'Scy4' + '?api_key=' + '1b05241e-7e60-4556-a73c-2ac841ef9735'
    }
  })

}