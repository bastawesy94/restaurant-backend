'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.MobileUser,{
        foreignKey: 'mobile_user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Order.belongsTo(models.Product,{
        foreignKey: 'product_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Order.init({
    product_id: DataTypes.INTEGER,
    mobile_user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    state: DataTypes.STRING,
    deliveryCost: DataTypes.DOUBLE,
    fixingCost: DataTypes.DOUBLE,
    setupCost: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'Order',
    freezeTableName: true,
    tableName: 'order'
  });
  return Order;
};