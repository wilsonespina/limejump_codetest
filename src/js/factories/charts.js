angular
  .module('limejump')
  .factory('Chart', Chart);

Chart.$inject = ['API', '$resource'];
function Chart(API, $resource) {
  return new $resource('/api/part2/:id', { id: '@id' }, {
    update: { method: 'PUT' },
    getAlphaCharts: {
      url: `${API}/part2`,
      method: 'GET',
      isArray: true
    }
  });
}



// function Chart(req, res) {
//
// const rp = require('request-promise');
//   rp('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=SUSQSARABU5FSEO4')
//     .then(response => {
//       const data = JSON.parse(response);
//       return res.status(200).json(data);
//     });
// }
