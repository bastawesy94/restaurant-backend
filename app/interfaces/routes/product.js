const express = require('express')
const productRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const productControllers = registerContainer().resolve('productControllers')

productRouters.get('/product/all',productControllers.getAllProducts)
productRouters.get('/product/company-products',productControllers.getAllProductsByCompanyId)


module.exports = productRouters