const express = require('express')
const categoryRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const categoryControllers = registerContainer().resolve('categoryControllers')

categoryRouters.get('/all-categories',categoryControllers.getAllCategories)

module.exports = categoryRouters