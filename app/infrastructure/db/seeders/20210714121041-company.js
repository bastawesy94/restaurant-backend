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
      id:1,
      category_service_id: serviceRows[0].id,
      name: 'شركة 1',
      description:'تفاصيل عن الشركة ونشاطها ومنتجاتخها ... ',
      website: 'www.company1.com',
      email: 'company1@gmail.com',
      mobileNumber: '50404040404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:2,
      category_service_id: serviceRows[0].id,
      name: 'شركة 2',
      description:'تفاصيل عن الشركة ونشاطها ومنتجاتخها ... ',
      website: 'www.company2.com',
      email: 'company2@gmail.com',
      mobileNumber: '50404090404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:3,
      category_service_id: serviceRows[1].id,
      description:'تفاصيل عن الشركة ونشاطها ومنتجاتخها ... ',
      name: 'شركة 3',
      website: 'www.company3.com',
      email: 'company3@gmail.com',
      mobileNumber: '507404040404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:4,
      category_service_id: serviceRows[1].id,
      name: 'شركة 4',
      description:'تفاصيل عن الشركة ونشاطها ومنتجاتخها ... ',
      website: 'www.company4.com',
      email: 'company4@gmail.com',
      mobileNumber: '504094040404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:5,
      category_service_id: serviceRows[1].id,
      name: 'شركة 5',
      description:'تفاصيل عن الشركة ونشاطها ومنتجاتخها ... ',
      website: 'www.company4.com',
      email: 'company4@gmail.com',
      mobileNumber: '504094040404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:6,
      category_service_id: serviceRows[2].id,
      name: 'شركة 6',
      description:'تفاصيل عن الشركة ونشاطها ومنتجاتخها ... ',
      website: 'www.company4.com',
      email: 'company4@gmail.com',
      mobileNumber: '504094040404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:7,
      category_service_id: serviceRows[2].id,
      name: 'شركة 7',
      description:'تفاصيل عن الشركة ونشاطها ومنتجاتخها ... ',
      website: 'www.company4.com',
      email: 'company4@gmail.com',
      mobileNumber: '504094040404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:8,
      category_service_id: serviceRows[3].id,
      name: 'شركة 8',
      description:'تفاصيل عن الشركة ونشاطها ومنتجاتخها ... ',
      website: 'www.company4.com',
      email: 'company4@gmail.com',
      mobileNumber: '504094040404',
      location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
      createdAt: new Date(),
      updatedAt: new Date()
     },
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('company', null, {});
  }
};
