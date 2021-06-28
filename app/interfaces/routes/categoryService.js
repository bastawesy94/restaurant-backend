const express = require('express')
const categoryServiceRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const categoryServiceControllers = registerContainer().resolve('categoryServiceControllers')

categoryServiceRouters.get('/category-service/all',categoryServiceControllers.getAllCategoryServices)
categoryServiceRouters.get('/category-service/services',categoryServiceControllers.getAllCategoryServicesByCategoryId)


module.exports = categoryServiceRouters