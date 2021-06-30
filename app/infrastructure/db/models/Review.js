'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Company,{
        foreignKey: 'company_id'
        })
      Review.belongsTo(models.MobileUser,{
        foreignKey: 'mobile_user_id'
      })
    }
  };
  Review.init({
    company_id: DataTypes.INTEGER,
    mobile_user_id: DataTypes.INTEGER,
    opinion: DataTypes.STRING,
    stars: DataTypes.INTEGER
  }
  , {
    sequelize,
    modelName: 'Review',
    freezeTableName: true,
    tableName: 'review'
  });
  return Review;
};