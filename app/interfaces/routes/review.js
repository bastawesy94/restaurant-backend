const express = require('express')
const reviewRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const reviewControllers = registerContainer().resolve('reviewControllers')

reviewRouters.get('/review/all',reviewControllers.getAllReviews)
reviewRouters.get('/review/company-reviews',reviewControllers.getAllReviewsByCompanyId)


module.exports = reviewRouters