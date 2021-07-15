const express = require('express')
const companyRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const companyControllers = registerContainer().resolve('companyControllers')
const {procErr} = require('../../interfaces/middleware/processError')
const CompanyValidator = require('../../domain/company/CompanyValidator')

companyRouters.get('/company/all',companyControllers.getAllCompanies)
companyRouters.get('/company/profile/:id',CompanyValidator.companyValidate('getCompanyById'),procErr,companyControllers.getCompanyById)
companyRouters.get('/company/all/:categoryServiceId',CompanyValidator.companyValidate('getAllCompaniesByCategoryServiceId'),procErr,companyControllers.getAllCompaniesByCategoryServiceId)
companyRouters.get('/company/all-by-category',companyControllers.getAllCompaniesByCategoryId)
companyRouters.get('/company/all-with-rates',companyControllers.getAllCompaniesWithRate)
companyRouters.get('/company/all-by-category-with-rates/:cateoryId',CompanyValidator.companyValidate('allByCategoryWithRates'),procErr,companyControllers.getAllCompaniesWithRatesByCategoryId)

module.exports = companyRouters