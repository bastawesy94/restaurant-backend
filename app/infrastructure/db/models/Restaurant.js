'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      Restaurant.belongsTo(models.MobileUser, {
        foreignKey: 'mobile_user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
       });
      }
  };
  Restaurant.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    mobile_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'restaurant',
    modelName: 'Restaurant',
  });
  return Restaurant;
};