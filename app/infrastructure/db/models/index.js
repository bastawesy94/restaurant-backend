'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const connection = require('../DB_connection/databaseCredentials')
const WebServerService = require('../../web_server/WebServerService')
const basename = path.basename(__filename);
const db = {};
let {sequelize} = WebServerService.getServerINFO()

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
//models .
db.userModel = require('./MobileUser')(sequelize , Sequelize)
db.categoryModel = require('./Category')(sequelize , Sequelize)
db.categoryServiceModel = require('./CategoryService')(sequelize , Sequelize)
db.companyModel = require('./Company')(sequelize , Sequelize)
db.poductModel = require('./Product')(sequelize , Sequelize)
db.reviewModel = require('./Review')(sequelize , Sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
