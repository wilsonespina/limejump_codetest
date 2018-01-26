angular
  .module('limejump')
  .factory('Company', Company);

Company.$inject = [];
function Company() {
  const all = [{
    name: 'Limejump',
    address: 'test address'
  },{
    name: 'Ford',
    address: 'test address'
  },{
    name: 'Samsung',
    address: 'test address'
  },{
    name: 'National Grid',
    address: 'test address'
  },{
    name: 'Barclays',
    address: 'test address'
  },{
    name: 'Apple',
    address: 'test address'
  },{
    name: 'Nike',
    address: 'test address'
  },{
    name: 'Sony',
    address: 'test address'
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
