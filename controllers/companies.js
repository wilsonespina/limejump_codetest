module.exports = {
  index: companiesIndex
};

const Company = require('../models/company');

function companiesIndex(req, res) {
  Company.find((err, companies) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(companies);
  });
}
