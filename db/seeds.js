const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Company = require('../models/company');

mongoose.connect(dbURI);

Company.collection.drop();

const companyData = [{
  name: 'Adidas',
  address: 'TEST DATA'
},{
  name: 'Limejump',
  address: 'TEST DATA'
},{
  name: 'Sony',
  address: 'TEST DATA'
},{
  name: 'Barclays',
  address: 'TEST DATA'
}];

Company
  .create(companyData)
  .then(companies => console.log(`${companies.length} companies created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
