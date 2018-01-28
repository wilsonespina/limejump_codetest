const Chart = require('../models/chart');

function indexRoute(req, res, next) {
  Chart
    .find()
    .exec()
    .then((charts) => res.json(charts))
    .catch(next);
}

module.exports = {
  index: indexRoute
  // show: showRoute,
  // update: updateRoute
};
