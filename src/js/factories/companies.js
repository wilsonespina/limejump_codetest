angular
  .module('limejump')
  .factory('Company', Company);

Company.$inject = [];
function Company() {
  const all = [{
    name: 'Limejump'
  },{
    name: 'Ford'
  },{
    name: 'Samsung'
  },{
    name: 'National Grid'
  },{
    name: 'Barclays'
  },{
    name: 'Apple'
  },{
    name: 'Nike'
  },{
    name: 'Sony'
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
