'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.belongsTo(models.CategoryService,{
        foreignKey: 'category_service_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Company.hasMany(models.Product, {
        foreignKey: 'company_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
     Company.hasMany(models.Review, {
      foreignKey: 'company_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
     });
    }
  };
  Company.init({
    category_service_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description:DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    location: DataTypes.GEOMETRY('POINT')
  }, {
    sequelize,
    modelName: 'Company',
    freezeTableName: true,
    tableName: 'company'
  });
  return Company;
};