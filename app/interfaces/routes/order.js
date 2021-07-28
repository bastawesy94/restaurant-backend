const express = require('express')
const orderRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const orderControllers = registerContainer().resolve('orderControllers')
const mobileUserAuth = require('../../interfaces/middleware/mobileUserAuth')

orderRouters.get('/order/all',orderControllers.getAllOrders)
orderRouters.get('/order/company-orders',orderControllers.getAllOrdersByCompanyId)
orderRouters.get('/order/mobile-user-orders',orderControllers.getAllOrdersByMobileUserId)
orderRouters.post('/order/create-order',mobileUserAuth,orderControllers.createOrder)

module.exports = orderRouters