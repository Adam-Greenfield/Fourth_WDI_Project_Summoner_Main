angular
  .module('championApp')
  .factory('Champion', Champion)

Champion.$inject = ['$resource', 'LOLGLOBAL', 'LOLKEY'];
function Champion($resource, LOLGLOBAL, LOLKEY){

  return $resource(LOLGLOBAL, { api_key: LOLKEY, id: '@id'}, {
    'getChampions': {
      method: 'GET',
      url: LOLGLOBAL + 'champion/:id'
    }
  })


}