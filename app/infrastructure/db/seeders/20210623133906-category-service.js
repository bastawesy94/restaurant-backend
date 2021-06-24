'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      const categories = await queryInterface.sequelize.query(
      `SELECT id from category;`
    );
    const categoryRows = categories[1];
    console.log("adas : " + categoryRows)
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
     }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('category_service', null, {});
  }
};
