angular
  .module('limejump')
  .factory('Company', Company);

Company.$inject = ['$resource'];
function Company($resource) {
  return new $resource('/api/part1/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
