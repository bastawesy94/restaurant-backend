const express = require('express')
const companyRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const companyControllers = registerContainer().resolve('companyControllers')

companyRouters.get('/company/all',companyControllers.getAllCompanies)
companyRouters.get('/company/company-services',companyControllers.getAllCompaniesByCategoryServiceId)
companyRouters.get('/company/all-by-category',companyControllers.getAllCompaniesByCategoryId)
companyRouters.get('/company/all-with-rates',companyControllers.getAllCompaniesWithRate)
companyRouters.get('/company/all-by-category-with-rates',companyControllers.getAllCompaniesWithRatesByCategoryId)


module.exports = companyRouters