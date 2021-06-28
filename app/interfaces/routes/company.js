const express = require('express')
const companyRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const companyControllers = registerContainer().resolve('companyControllers')

companyRouters.get('/company/all',companyControllers.getAllCompanies)
companyRouters.get('/company/company-services',companyControllers.getAllCompaniesByCategoryServiceId)


module.exports = companyRouters