'use strict';
const {
  Model
} = require('sequelize');
const db = require('../models/index')
module.exports = (sequelize, DataTypes) => {
  class CategoryService extends Model {
    static associate(models) {
      // CategoryService.belongsTo(models.CategoryrModel);
    //   CategoryService.hasMany(models.CompanyModel, {
    //   foreignKey: 'company_id',
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    //  });
    }
  };
  CategoryService.init({
    name:{
    type: DataTypes.STRING,
    allowNull:false,
    unique: true
    } 
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'category_service',
    modelName: 'CategoryService',
  });
  return CategoryService;
};