'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      // Company.belongsTo(models.CategoryServiceModel)
    //   Company.hasMany(models.ProductModel, {
    //   foreignKey: 'product_id',
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    //  });
    //  Company.hasMany(models.ReviewModel, {
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
  });
  return Company;
};