const express = require('express')
const companyRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const companyControllers = registerContainer().resolve('companyControllers')

companyRouters.get('/all-companies',companyControllers.getAllCompanies)
companyRouters.get('/company/id',companyControllers.getAllCompaniesByCategoryServiceId)


module.exports = companyRouters