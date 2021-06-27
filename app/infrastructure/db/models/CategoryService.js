'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryService extends Model {
    static associate(models) {
      CategoryService.belongsTo(models.Category,{
        foreignKey: 'category_id'
      })

      CategoryService.hasMany(models.Company,{
        foreignKey: 'category_service_id'
      });

    }
  };
  CategoryService.init({
    category_id: {
        type: DataTypes.INTEGER,
    },
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