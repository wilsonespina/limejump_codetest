const rp = require('request-promise');

function getChartData(req, res) {
  rp('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=SUSQSARABU5FSEO4')
    .then(response => {
      const data = JSON.parse(response);
      return res.status(200).json(data);
    });
}

module.exports = {
  chart: getChartData
};
