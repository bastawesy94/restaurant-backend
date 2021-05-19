const { Sequelize } = require('sequelize');
require('dotenv/config')

module.exports.developmentConnection = new Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USERNAME, process.env.DEV_DB_PASSWORD, {
  host: process.env.DEV_DB_HOST,
  dialect: process.env.DEV_DB_DIALICT
});

module.exports.productionConnection = new Sequelize(process.env.PROD_DB_NAME, process.env.PROD_DB_USERNAME, process.env.PROD_DB_PASSWORD, {
  host: process.env.PROD_DB_HOST,
  dialect: process.env.PROD_DB_DIALICT
});