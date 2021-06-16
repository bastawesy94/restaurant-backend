const { createContainer, asClass, asValue, asFunction } = require('awilix');
const MobileUserServices = require('../../../application/use_cases/MobileUserServices')
const MobileUserControllers = require('../../../interfaces/controllers/MobileUserControllers')
const MobileUserRepository = require('../../repositories/MobileUserReposetoryMySQL');
const db = require('../../db/models/index');

const registerContainer = (otherServices = null) => {
      const container = createContainer();
      container.register({
          //services 
           mobileUserServices : asClass(MobileUserServices),
          //controllers
          mobileUserControllers: asClass(MobileUserControllers),
          //repositories
          mobileUserRepository: asClass(MobileUserRepository),
          //database
          db :asValue(db),
          ...otherServices,
      });
      return container;
};
module.exports = registerContainer;