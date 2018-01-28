const Company = require('../models/company');

function indexRoute(req, res, next) {
  Company
    .find()
    .exec()
    .then((companies) => res.json(companies))
    .catch(next);
}

module.exports = {
  index: indexRoute
  // show: showRoute,
  // update: updateRoute
};
