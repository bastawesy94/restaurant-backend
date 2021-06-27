'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Product.belongsTo(models.Company)
    }
  };
  Product.init({
    cost: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Product',
    freezeTableName: true,
    tableName: 'product'
  });
  return Product;
};