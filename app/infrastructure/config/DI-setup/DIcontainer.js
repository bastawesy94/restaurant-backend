const { createContainer, asClass, asValue, asFunction } = require('awilix');

const MobileUserServices = require('../../../application/use_cases/MobileUserServices')
const CategoryServices = require('../../../application/use_cases/CategoryServices')
const CateoryServiceServices= require('../../../application/use_cases/CateoryServiceServices')
const CompanyServices= require('../../../application/use_cases/CompanyServices')
const ProductServices= require('../../../application/use_cases/ProductServices')
const OrderServices= require('../../../application/use_cases/OrderServices')
const ReviewServices= require('../../../application/use_cases/ReviewServices')

const MobileUserControllers = require('../../../interfaces/controllers/MobileUserControllers')
const CategoryControllers= require('../../../interfaces/controllers/CategoryControllers')
const CategoryServiceControllers= require('../../../interfaces/controllers/CategoryServiceControllers')
const CompanyControllers= require('../../../interfaces/controllers/CompanyControllers')
const ProductControllers= require('../../../interfaces/controllers/ProductControllers')
const ReviewControllers= require('../../../interfaces/controllers/ReviewControllers')
const OrderControllers= require('../../../interfaces/controllers/OrderControllers')

const MobileUserRepository = require('../../repositories/MobileUserReposetoryMySQL');
const CategoryRepository = require('../../repositories/CategoryRepositoryMySQL');
const CategoryServiceRepository = require('../../repositories/CategoryServiceRepositoryMySQL');
const CompanyRepository = require('../../repositories/CompanyRepositoryMySQL');
const ProductRepository = require('../../repositories/ProductRepositoryMySQL');
const ReviewRepository = require('../../repositories/ReviewRepositoryMySQL');
const OrderRepository = require('../../repositories/OrderRepositoryMySQL');

const db = require('../../db/models/index');

const registerContainer = (otherServices = null) => {
      const container = createContainer();
      container.register({
          //services 
           mobileUserServices : asClass(MobileUserServices),
           categoryServices : asClass(CategoryServices),
           cateoryServiceServices : asClass(CateoryServiceServices),
           companyServices : asClass(CompanyServices),
           productServices : asClass(ProductServices),
           orderServices : asClass(OrderServices),
           reviewServices : asClass(ReviewServices),

          //controllers
          mobileUserControllers: asClass(MobileUserControllers),
          categoryControllers: asClass(CategoryControllers),
        //   categoryServiceControllers: asClass(CategoryServiceControllers),
        //   companyControllers: asClass(CompanyControllers),
        //   productControllers: asClass(ProductControllers),
        //   orderControllers: asClass(OrderControllers),
        //   reviewControllers: asClass(ReviewControllers),

          //repositories
          mobileUserRepository: asClass(MobileUserRepository),
          categoryRepository: asClass(CategoryRepository),
          categoryServiceRepository: asClass(CategoryServiceRepository),
          companyRepository: asClass(CompanyRepository),
          productRepository: asClass(ProductRepository),
          reviewRepository: asClass(ReviewRepository),
        //   orderRepository: asClass(OrderRepository),

          //database
          db :asValue(db),
          ...otherServices,

      });
      return container;
};
module.exports = registerContainer;