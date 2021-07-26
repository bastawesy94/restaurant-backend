'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.MobileUser,{
        foreignKey: 'mobile_user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Cart.belongsTo(models.Product,{
        foreignKey: 'product_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Cart.init({
    mobile_user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    isCompletedOrder:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Cart',
    freezeTableName: true,
    tableName: 'cart'
  });
  return Cart;
};