'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //   const categories = await queryInterface.sequelize.query(
    //   `SELECT id from category;`
    // );
    
    // const categoryRows = categories[1];

    await queryInterface.bulkInsert('category_service', [
     {
      id: 1,
      name: 'كراتين مياه',
      category_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id: 2,
      name: 'تحلية مياه',
      category_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id: 4,
      name: 'خدمة الصرف الصحي',
      category_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id: 3,
      name:'يبيع وشراء الخزانات',
      category_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id: 5,
      name:'خدمة الصيانة',
      category_id:4,
      createdAt: new Date(),
      updatedAt: new Date()
     }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category_service', null, {});
  }
};
