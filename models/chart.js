const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String }
});

module.exports = mongoose.model('Chart', companySchema);
