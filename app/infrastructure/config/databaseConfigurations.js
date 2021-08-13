require('dotenv').config()

module.exports = {
  "production": {
    "username": process.env.PROD_DB_USERNAME,
    "password": process.env.PROD_DB_PASSWORD,
    "database": process.env.PROD_DB_NAME,
    "host": process.env.PROD_DB_HOST,
    "port": process.env.PROD_DB_PORT,
    "dialect": process.env.PROD_DB_DIALICT,
    "migrationStorage": "json"
  },

  "local": {
    "username": process.env.LOCAL_DB_USERNAME,
    "password": process.env.LOCAL_DB_PASSWORD,
    "database": process.env.LOCAL_DB_NAME,
    "host": process.env.LOCAL_DB_HOST,
    "port": process.env.LOCAL_DB_PORT,
    "dialect": process.env.LOCAL_DB_DIALICT,
    "migrationStorage": "json"
  }
}
