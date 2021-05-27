const express = require('express')
const mobileUserRouters = express.Router()
const UserController = require('../controllers/MobileUserController')

mobileUserRouters.get('/all-mobile-users', UserController.getAllMobileUsers)
mobileUserRouters.get('/create-mobile-user', UserController.createMobileUser)

module.exports = mobileUserRouters