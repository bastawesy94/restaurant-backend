const express = require('express')
const productRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const productControllers = registerContainer().resolve('productControllers')
const {procErr} = require('../../interfaces/middleware/processError')
const ProductValidator = require('../../domain/product/ProductValidator')

productRouters.get('/product/all',productControllers.getAllProducts)
productRouters.get('/product/company-products/:companyId',ProductValidator.productValidate('allProductsByCompanyId'),procErr,productControllers.getAllProductsByCompanyId)


module.exports = productRouters