const express = require('express')
const mobileUserRouters = express.Router()
const UserController = require('../controllers/MobileUserController')

mobileUserRouters.get('/all-mobile-users', UserController.getAllMobileUsers)
mobileUserRouters.post('/signUp', UserController.signUp)

module.exports = mobileUserRouters