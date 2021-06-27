'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MobileUser extends Model {
    static associate(models) {
    //   MobileUser.hasMany(models.Review, {
    //   foreignKey: 'review_id',
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    //  });
    }
  };
  MobileUser.init({
    mobileNumber: {
      type : DataTypes.STRING,
      allowNull : false ,
      unique : true ,
    },
    password: {
      type : DataTypes.STRING,
      allowNull : true ,
      unique : true ,
    }
  }, {
    sequelize,
    modelName: 'MobileUser',
    freezeTableName: true,
    tableName: 'mobile_user'
  });
  return MobileUser;
};