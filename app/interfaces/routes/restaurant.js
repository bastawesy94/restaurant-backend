const express = require('express')
const mobileUserAuth = require('../middleware/mobileUserAuth')
const restaurantRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const restaurantControllers = registerContainer().resolve('restaurantControllers')
// const {procErr} = require('../middleware/processError')
// const RestaurantValidator = require('../../domain/mobile-user/RestaurantValidator')

restaurantRouters.get('/restaurant/all',restaurantControllers.getAllRestaurants)

module.exports = restaurantRouters