angular
  .module('limejump')
  .factory('Company', Company);

Company.$inject = [];
function Company() {
  const all = [{
    name: 'Limejump',
    address: 'test address',
    id: 1
  },{
    name: 'Ford',
    address: 'test address',
    id: 2
  },{
    name: 'Samsung',
    address: 'test address',
    id: 3
  },{
    name: 'National Grid',
    address: 'test address',
    id: 4
  },{
    name: 'Barclays',
    address: 'test address',
    id: 5
  },{
    name: 'Apple',
    address: 'test address',
    id: 6
  },{
    name: 'Nike',
    address: 'test address'
  },{
    name: 'Sony',
    address: 'test address',
    id: 7
  }];
  return {
    query() {
      return all;
    },
    get(params) {
      return all.find((el) => {
        return Object.keys(params).every((key) => {
          return params[key] === el[key];
        });
      });
    }
  };
}
