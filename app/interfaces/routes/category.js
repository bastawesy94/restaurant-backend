const express = require('express')
const categoryRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const categoryControllers = registerContainer().resolve('categoryControllers')

categoryRouters.get('/category/all',categoryControllers.getAllCategories)

module.exports = categoryRouters