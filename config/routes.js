const express = require('express');
const router  = express.Router();

const characters = require('../controllers/companies');

router.route('/companies')
  .get(characters.index);

module.exports = router;
