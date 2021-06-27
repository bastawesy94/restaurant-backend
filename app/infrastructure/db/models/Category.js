'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.CategoryService,{
          foreignKey: 'category_id'
        })//here
    }
  };
  Category.init({
    name:{
      type: DataTypes.STRING,
      allowNull: true,
      unique:true 
    } 
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'category',
    modelName: 'Category',
  });
  return Category;
};