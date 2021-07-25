'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('mobile_user', 
    [{
      id:  1,
      mobileNumber: "5012345678",//password
      password: '$2b$10$FJL0xJjlTHu/HYE.x6woMe1KtzGUC2sQn2qtTFx.svvLNe8UGQL9u',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id:  2,
      mobileNumber: "50404040404",
      password: '50404040404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date() 
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('mobile_user', null, {});
  }
};
