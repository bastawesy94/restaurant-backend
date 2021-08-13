const { Sequelize } = require('sequelize');
require('dotenv/config')

module.exports.productionConnection = new Sequelize(process.env.PROD_DB_NAME, process.env.PROD_DB_USERNAME, process.env.PROD_DB_PASSWORD, {
  host: process.env.PROD_DB_HOST,
  dialect: process.env.PROD_DB_DIALICT
});

module.exports.localConnection = new Sequelize(process.env.LOCAL_DB_NAME, process.env.LOCAL_DB_USERNAME, process.env.LOCAL_DB_PASSWORD, {
  host: process.env.LOCAL_DB_HOST,
  dialect: process.env.LOCAL_DB_DIALICT
});