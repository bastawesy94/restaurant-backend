const express = require('express')
const mobileUserAuth = require('../middleware/mobileUserAuth')
const restaurantRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const restaurantControllers = registerContainer().resolve('restaurantControllers')
const {procErr} = require('../middleware/processError')
const RestaurantValidator = require('../../domain/restaurant/RestaurantValidator')

restaurantRouters.get('/restaurant/all',restaurantControllers.getAllRestaurants)
restaurantRouters.post('/restaurant/create',RestaurantValidator.restaurantValidate('createRestaurant'),procErr,mobileUserAuth,restaurantControllers.createRestaurant)
restaurantRouters.put('/restaurant/update/:restaurantId',RestaurantValidator.restaurantValidate('createRestaurant'),procErr,mobileUserAuth,restaurantControllers.updateRestaurant)
restaurantRouters.delete('/restaurant/delete/:restaurantId',RestaurantValidator.restaurantValidate('deleteRestaurant'),procErr,mobileUserAuth,restaurantControllers.deleteRestaurant)

module.exports = restaurantRouters