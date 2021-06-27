'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
    //   Company.belongsTo(models.CategoryService)
    //   Company.hasMany(models.Product, {
    //   foreignKey: 'product_id',
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    //  });
    //  Company.hasMany(models.Review, {
    //   foreignKey: 'review_id',
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    //  });
    }
  };
  Company.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
    freezeTableName: true,
    tableName: 'company'
  });
  return Company;
};