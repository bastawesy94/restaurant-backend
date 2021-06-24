'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('category', 
    [{
      name: 'خدمات المياه',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'خدمات الصرف الصحي',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'خدمات بيع وشراء الخزانات',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'خدمات صيانة الخزانات',
      createdAt: new Date(),
      updatedAt: new Date()
     },], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category', null, {});
  }
};
