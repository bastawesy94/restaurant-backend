'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      const productIds = await queryInterface.sequelize.query(
      `SELECT id from product;`
    );

    const ids = productIds[1];
    console.log(ids)
    for(let i=0 ; i<ids.length ; i++){
      await queryInterface.bulkInsert('review', [
        {
         mobile_user_id: 1,
         product_id: ids[i].id,
         company_id: 1,
         createdAt: new Date(),
         opinion: 'very good product .',
         stars: 4.3,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        ], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('review', null, {});
  }
};
