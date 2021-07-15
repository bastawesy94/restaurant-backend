'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('category', 
    [{
      id:1,
      name: 'خدمات المياه',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:3,
      name: 'خدمات الصرف الصحي',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:2,
      name: 'خدمات بيع وشراء الخزانات',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:4,
      name: 'خدمات صيانة الخزانات',
      createdAt: new Date(),
      updatedAt: new Date()
     },], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category', null, {});
  }
};
