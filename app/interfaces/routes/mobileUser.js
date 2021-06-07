const express = require('express')
const mobileUserAuth = require('../../interfaces/middleware/mobileUserAuth')
const mobileUserRouters = express.Router()
const UserController = require('../controllers/MobileUserController')

mobileUserRouters.get('/all-mobile-users',mobileUserAuth, UserController.getAllMobileUsers)
mobileUserRouters.post('/signUp',mobileUserAuth, UserController.signUp)
mobileUserRouters.post('/auth', UserController.auth)
mobileUserRouters.post('/create-mobile-user', UserController.createMobileUser)
mobileUserRouters.post('/verify-mobile-user', UserController.verifyMobileUser)

module.exports = mobileUserRouters