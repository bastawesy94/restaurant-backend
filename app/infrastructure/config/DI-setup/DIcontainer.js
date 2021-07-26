const { createContainer, asClass, asValue, asFunction } = require('awilix');

const MobileUserServices = require('../../../application/use_cases/MobileUserServices')
const CategoryServices = require('../../../application/use_cases/CategoryServices')
const CategoryServiceServices= require('../../../application/use_cases/CategoryServiceServices')
const CompanyServices= require('../../../application/use_cases/CompanyServices')
const ProductServices= require('../../../application/use_cases/ProductServices')
const ReviewServices= require('../../../application/use_cases/ReviewServices')
const OrderServices= require('../../../application/use_cases/OrderServices')
const CartServices= require('../../../application/use_cases/CartServices')

const MobileUserControllers = require('../../../interfaces/controllers/MobileUserControllers')
const CategoryControllers= require('../../../interfaces/controllers/CategoryControllers')
const CategoryServiceControllers= require('../../../interfaces/controllers/CategoryServiceControllers')
const CompanyControllers= require('../../../interfaces/controllers/CompanyControllers')
const ProductControllers= require('../../../interfaces/controllers/ProductControllers')
const ReviewControllers= require('../../../interfaces/controllers/ReviewControllers')
const OrderControllers= require('../../../interfaces/controllers/OrderControllers')
const CartControllers= require('../../../interfaces/controllers/CartControllers')

const MobileUserRepository = require('../../repositories/MobileUserReposetoryMySQL');
const CategoryRepository = require('../../repositories/CategoryRepositoryMySQL');
const CategoryServiceRepository = require('../../repositories/CategoryServiceRepositoryMySQL');
const CompanyRepository = require('../../repositories/CompanyRepositoryMySQL');
const ProductRepository = require('../../repositories/ProductRepositoryMySQL');
const ReviewRepository = require('../../repositories/ReviewRepositoryMySQL');
const OrderRepository = require('../../repositories/OrderRepositoryMySQL');
const CartRepository = require('../../repositories/CartRepositoryMySQL');

const db = require('../../db/models/index');

const registerContainer = (otherServices = null) => {
      const container = createContainer();
      container.register({
          //services 
           mobileUserServices : asClass(MobileUserServices),
           categoryServices : asClass(CategoryServices),
           categoryServiceServices : asClass(CategoryServiceServices),
           companyServices : asClass(CompanyServices),
           productServices : asClass(ProductServices),
           orderServices : asClass(OrderServices),
           reviewServices : asClass(ReviewServices),
           cartServices : asClass(CartServices),

          //controllers
          mobileUserControllers: asClass(MobileUserControllers),
          categoryControllers: asClass(CategoryControllers),
          categoryServiceControllers: asClass(CategoryServiceControllers),
          companyControllers: asClass(CompanyControllers),
          productControllers: asClass(ProductControllers),
          reviewControllers: asClass(ReviewControllers),
          orderControllers: asClass(OrderControllers),
          cartControllers: asClass(CartControllers),

          //repositories
          mobileUserRepository: asClass(MobileUserRepository),
          categoryRepository: asClass(CategoryRepository),
          categoryServiceRepository: asClass(CategoryServiceRepository),
          companyRepository: asClass(CompanyRepository),
          productRepository: asClass(ProductRepository),
          reviewRepository: asClass(ReviewRepository),
          orderRepository: asClass(OrderRepository),
          cartRepository: asClass(CartRepository),

          //database
          db :asValue(db),
          ...otherServices,

      });
      return container;
};
module.exports = registerContainer;