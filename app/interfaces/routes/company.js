const express = require('express')
const companyRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const companyControllers = registerContainer().resolve('companyControllers')
const {procErr} = require('../../interfaces/middleware/processError')
const CompanyValidator = require('../../domain/company/CompanyValidator')


companyRouters.get('/company/all',companyControllers.getAllCompanies)
companyRouters.get('/company/profile',companyControllers.getCompanyById)
companyRouters.get('/company/company-services',companyControllers.getAllCompaniesByCategoryServiceId)
companyRouters.get('/company/all-by-category',companyControllers.getAllCompaniesByCategoryId)
companyRouters.get('/company/all-with-rates',companyControllers.getAllCompaniesWithRate)
companyRouters.get('/company/all-by-category-with-rates/:id',companyControllers.getAllCompaniesWithRatesByCategoryId)
// companyRouters.get('/company/all-by-category-with-rates/:id',CompanyValidator.mobileUserValidate('allByCategoryWithRates'),procErr,companyControllers.getAllCompaniesWithRatesByCategoryId)

module.exports = companyRouters