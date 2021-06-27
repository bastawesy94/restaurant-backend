'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Review.belongsTo(models.Company)
      // Review.belongsTo(models.MobileUser)
    }
  };
  Review.init({
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