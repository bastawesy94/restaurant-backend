const { createContainer, asClass, asValue, asFunction } = require('awilix');

const MobileUserServices = require('../../../application/use_cases/MobileUserServices')
const RestaurantServices = require('../../../application/use_cases/RestaurantServices')

const MobileUserControllers = require('../../../interfaces/controllers/MobileUserControllers')
const RestaurantControllers = require('../../../interfaces/controllers/RestaurantControllers')

const MobileUserRepository = require('../../repositories/MobileUserReposetoryMySQL');
const RestaurantReposetory = require('../../repositories/RestaurantReposetoryMySQL');

const db = require('../../db/models/index');

const registerContainer = (otherServices = null) => {
      const container = createContainer();
      container.register({
          //services 
           mobileUserServices : asClass(MobileUserServices),
           restaurantServices : asClass(RestaurantServices),

          //controllers
          mobileUserControllers: asClass(MobileUserControllers),
          restaurantControllers: asClass(RestaurantControllers),
    
          //repositories
          mobileUserRepository: asClass(MobileUserRepository),
          restaurantReposetory: asClass(RestaurantReposetory),

          //database
          db :asValue(db),
          ...otherServices,

      });
      return container;
};
module.exports = registerContainer;