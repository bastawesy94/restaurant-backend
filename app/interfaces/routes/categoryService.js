const express = require('express')
const categoryServiceRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const categoryServiceControllers = registerContainer().resolve('categoryServiceControllers')

categoryServiceRouters.get('/all-category-services',categoryServiceControllers.getAllCategoryServices)
categoryServiceRouters.get('/category-service/id',categoryServiceControllers.getAllCategoryServicesByCategoryId)


module.exports = categoryServiceRouters