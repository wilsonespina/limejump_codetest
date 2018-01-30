const router = require('express').Router();
const companies = require('../controllers/companies');
// const charts = require('../controllers/charts');

router.route('/part1')
  .get(companies.index);

router.route('/part1/:id')
  .get(companies.show)
  .put(companies.update);

// router.route('/part2')
//   .get(charts.index);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
