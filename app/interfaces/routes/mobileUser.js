const express = require('express')
const mobileUserAuth = require('../../interfaces/middleware/mobileUserAuth')
const mobileUserRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const mobileUserControllers = registerContainer().resolve('mobileUserControllers')

mobileUserRouters.post('/signUp',mobileUserAuth, mobileUserControllers.signUp)
mobileUserRouters.post('/auth', mobileUserControllers.auth)
mobileUserRouters.post('/create-mobile-user', mobileUserControllers.createMobileUser)
mobileUserRouters.post('/verify-mobile-user', mobileUserControllers.verifyMobileUser)
mobileUserRouters.get('/users',mobileUserControllers.getAllMobileUsers)

module.exports = mobileUserRouters