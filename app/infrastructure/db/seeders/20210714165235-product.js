'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await queryInterface.sequelize.query(
      `SELECT id from company;`
    );

    const companyRows = categories[1];

    for(let x=0 ; x<3 ; x++){
      for(let i=0 ; i<8 ; i++){
        await queryInterface.bulkInsert('product', 
      [{
        company_id: companyRows[i].id,
        name: 'Product Number : ' + Math.ceil(Math.random()*100),
        quantity: Math.ceil(Math.random()*100),
        cost: Math.ceil(Math.random()*1000),
        createdAt: new Date(),
        updatedAt: new Date()
       },
      ], {});
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product', null, {});
  }
};
