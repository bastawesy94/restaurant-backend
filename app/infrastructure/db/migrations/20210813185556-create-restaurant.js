'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('restaurant', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mobile_user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'mobile_user',
          key: 'id'
         }      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
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
    await queryInterface.dropTable('restaurant');
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS=1;')
  }
};