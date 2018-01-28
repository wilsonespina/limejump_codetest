const Company = require('../models/company');

function indexRoute(req, res, next) {
  Company
    .find()
    .exec()
    .then((companies) => res.json(companies))
    .catch(next);
}

function showRoute(req, res, next) {
  Company
    .findById(req.params.id)
    .exec()
    .then((company) => {
      if(!company) return res.notFound();

      res.json(company);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Company
    .findById(req.params.id)
    .exec()
    .then((company) => {
      if(!company) return res.notFound();

      for(const field in req.body) {
        company[field] = req.body[field];
      }

      return company.save();
    })
    .then((company) => res.json(company))
    .catch(next);
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  update: updateRoute
};
