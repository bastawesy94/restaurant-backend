'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Company,{
        foreignKey: 'company_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Product.belongsTo(models.Cart,{
        foreignKey: 'product_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Product.hasMany(models.Order,{
        foreignKey: 'product_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Product.hasMany(models.Review,{
        foreignKey: 'product_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Product.init({
    company_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cost: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Product',
    freezeTableName: true,
    tableName: 'product'
  });
  return Product;
};