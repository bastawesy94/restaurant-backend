'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.MobileUser,{
        foreignKey: 'mobile_user_id'
      })
      Order.belongsTo(models.Product,{
        foreignKey: 'product_id'
      })
      Order.belongsTo(models.Company,{
        foreignKey: 'company_id'
      })
    }
  };
  Order.init({
    product_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    mobile_user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    freezeTableName: true,
    tableName: 'order'
  });
  return Order;
};