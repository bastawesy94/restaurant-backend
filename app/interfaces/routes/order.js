const express = require('express')
const orderRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const orderControllers = registerContainer().resolve('orderControllers')

orderRouters.get('/order/all',orderControllers.getAllOrders)
orderRouters.get('/order/company-orders',orderControllers.getAllOrdersByCompanyId)
orderRouters.get('/order/mobile-user-orders',orderControllers.getAllOrdersByMobileUserId)
orderRouters.get('/order/create-order',orderControllers.createOrder)

module.exports = orderRouters