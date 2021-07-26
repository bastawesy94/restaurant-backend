'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product',
          key: 'id'
         }
       },
       mobile_user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'mobile_user',
          key: 'id'
         }
       },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      isCompletedOrder: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('cart');
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS=1;')
  }
};