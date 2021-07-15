const express = require('express')
const categoryServiceRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const categoryServiceControllers = registerContainer().resolve('categoryServiceControllers')
const {procErr} = require('../../interfaces/middleware/processError')
const CategoryServiceValidator = require('../../domain/category-service/CategoryServiceValidator')

categoryServiceRouters.get('/category-service/all',categoryServiceControllers.getAllCategoryServices)
categoryServiceRouters.get('/category-service/all-by-category/:categoryId',CategoryServiceValidator.cateegoryServiceValidate('getAllCategoryServicesByCategoryId'),procErr,categoryServiceControllers.getAllCategoryServicesByCategoryId)

module.exports = categoryServiceRouters