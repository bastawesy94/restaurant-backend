'use strict';
const Point = require('../../../domain/location-point/Point');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Location = new Point('Point' , [39.807222,-76.984722])
    const services = await queryInterface.sequelize.query(
      `SELECT id from category_service;`
    );
    
    const serviceRows = services[1];

    await queryInterface.bulkInsert('company', 
    [{
      category_service_id: serviceRows[1].id,
      name: 'شركة 1',
      website: 'www.company1.com',
      email: 'company1@gmail.com',
      mobileNumber: '50404040404',
      Location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      category_service_id: serviceRows[1].id,
      name: 'شركة 2',
      website: 'www.company2.com',
      email: 'company2@gmail.com',
      mobileNumber: '50404090404',
      Location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      category_service_id: serviceRows[1].id,
      name: 'شركة 3',
      website: 'www.company3.com',
      email: 'company3@gmail.com',
      mobileNumber: '507404040404',
      Location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      category_service_id: serviceRows[1].id,
      name: 'شركة 4',
      website: 'www.company4.com',
      email: 'company4@gmail.com',
      mobileNumber: '504094040404',
      Location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('company', null, {});
  }
};
