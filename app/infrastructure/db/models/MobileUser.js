'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MobileUser extends Model {
    static associate(models) {
    MobileUser.hasMany(models.Restaurant, {
      foreignKey: 'mobile_user_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
     });
    }
  };
  MobileUser.init({
    userName: {
      type : DataTypes.STRING,
      allowNull : false ,
      unique : true ,
    },
    mobileNumber: {
      type : DataTypes.STRING,
      allowNull : false ,
      unique : true ,
    },
    email: {
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
    freezeTableName: true,
    tableName: 'mobile_user',
    modelName: 'MobileUser',
  });
  return MobileUser;
};