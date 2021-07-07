'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MobileUser extends Model {
    static associate(models) {
      MobileUser.hasMany(models.Review, {
      foreignKey: 'mobile_user_id',
     });
    MobileUser.hasMany(models.Order, {
      foreignKey: 'mobile_user_id',
     });
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
    },
    location: DataTypes.GEOMETRY('POINT')

  }, {
    sequelize,
    modelName: 'MobileUser',
    freezeTableName: true,
    tableName: 'mobile_user'
  });
  return MobileUser;
};