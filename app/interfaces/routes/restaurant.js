const express = require('express')
const mobileUserAuth = require('../middleware/mobileUserAuth')
const restaurantRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const restaurantControllers = registerContainer().resolve('restaurantControllers')
const {procErr} = require('../middleware/processError')
const RestaurantValidator = require('../../domain/restaurant/RestaurantValidator')

restaurantRouters.get('/restaurant/all',restaurantControllers.getAllRestaurants)
restaurantRouters.post('/restaurant/create',RestaurantValidator.restaurantValidate('createRestaurant'),procErr,mobileUserAuth,restaurantControllers.createRestaurant)

module.exports = restaurantRouters