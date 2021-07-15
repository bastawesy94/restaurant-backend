'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mobile_user', {
      id : {
        primaryKey : true ,
        autoIncrement : true ,
        type : Sequelize.INTEGER ,
        allowNull : false ,
      } ,
      mobileNumber: {
        type : Sequelize.STRING,
        allowNull : false ,
        unique : true ,
      },
      password: {
        type : Sequelize.STRING,
        allowNull : true ,
        unique : true ,
      },
      location: Sequelize.GEOMETRY('POINT'),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS=0;')
    await queryInterface.dropTable('mobile_user');
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS=1;')
  }
};