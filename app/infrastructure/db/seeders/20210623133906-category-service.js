'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      const categories = await queryInterface.sequelize.query(
      `SELECT id from category;`
    );
    
    const categoryRows = categories[1];

    await queryInterface.bulkInsert('category_service', [
     {
      name: 'كراتين مياه',
      category_id:categoryRows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'تحلية مياه',
      category_id:categoryRows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'خدمة الصرف الصحي',
      category_id:categoryRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'يبيع وشراء الخزانات',
      category_id:categoryRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'خدمة الصيانة',
      category_id:categoryRows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
     }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category_service', null, {});
  }
};
