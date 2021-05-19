'use strict';
const { Sequelize, Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  };
  User.init({
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};