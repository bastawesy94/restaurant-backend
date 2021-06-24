'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Review.belongsTo(models.CompanyModel)
      // Review.belongsTo(models.UserModel)
    }
  };
  Review.init({
    opinion: DataTypes.STRING,
    stars: DataTypes.INTEGER
  }
  , {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};