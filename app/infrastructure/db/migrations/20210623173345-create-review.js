'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('review', {
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
         }
       },
       company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'company',
          key: 'id'
         }
       },
      opinion: {
        type: Sequelize.STRING
      },
      stars: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('review');
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS=1;')
  }
};