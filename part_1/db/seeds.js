const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Company = require('../models/company');

mongoose.connect(dbURI);

Company.collection.drop();

const companyData = [{
  name: 'Monzo',
  address: '230 City Rd, London EC1V 2QY'
},{
  name: 'Limejump',
  address: '39 York Rd, Lambeth, London SE1 7NQ'
},{
  name: 'General Assembly',
  address: 'The Relay Building, 114 Whitechapel High St, London E1 7PT'
},{
  name: 'Byron',
  address: '26 Hill St, Richmond TW9 1TW'
},{
  name: 'National Grid',
  address: '1 - 3 Strand, London, WC2N 5EH'
}];

Company
  .create(companyData)
  .then(companies => console.log(`${companies.length} companies created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
