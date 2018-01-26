const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
  name: { type: String }
});

module.exports = mongoose.model('Company', CompanySchema);
