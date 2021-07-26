const express = require('express')
const cartRouters = express.Router()
const mobileUserAuth = require('../../interfaces/middleware/mobileUserAuth')
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const cartControllers = registerContainer().resolve('cartControllers')
// const {procErr} = require('../../interfaces/middleware/processError')
// const CartValidator = require('../../domain/cart/CartValidator')

cartRouters.get('/cart/all',cartControllers.getAllCarts)
cartRouters.post('/cart/add-product',mobileUserAuth,cartControllers.createCart)
module.exports = cartRouters