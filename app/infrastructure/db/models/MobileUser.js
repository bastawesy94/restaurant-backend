'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MobileUser extends Model {
    static associate(models) {
    }
  };
  MobileUser.init({
    id : {
      primaryKey : true ,
      autoIncrement : true ,
      type : DataTypes.INTEGER ,
      allowNull : false ,
    } ,
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'mobile_user',
    modelName: 'MobileUser',
  });
  return MobileUser;
};