'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('mobile_user', 
    [{
      id:  1,
      userName: "demouser",
      mobileNumber: "543364313436",
      password: '$2b$10$YOpQLkWzULJj3AClahzcEOKFuUan4PR2AQADVYVs3Iv/CyvaPLmSm',
      email: "mohamed112334343@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id:  2,
      userName: "ahmed",
      mobileNumber: "5646546646",
      password: '$2b$10$FJL0xJjlTHu/HYE.x6woMe1KtzGUC2sQn2qtT',
      email: "ahmed@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date() 
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('mobile_user', null, {});
  }
};
