'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Company,{
        foreignKey: 'company_id'
      })
      Product.hasMany(models.Order,{
        foreignKey: 'product_id'
      })
    }
  };
  Product.init({
    company_id: DataTypes.INTEGER,
    cost: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Product',
    freezeTableName: true,
    tableName: 'product'
  });
  return Product;
};