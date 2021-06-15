const express = require('express')
const mobileUserAuth = require('../../interfaces/middleware/mobileUserAuth')
const mobileUserRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const mobileUserControllers = registerContainer().resolve('mobileUserControllers')
const {procErr} = require('../../interfaces/middleware/processError')
const MobileUserValidator = require('../../domain/mobile-user/MobileUserValidator')

mobileUserRouters.post('/signUp',mobileUserAuth, mobileUserControllers.signUp)
mobileUserRouters.post('/auth', mobileUserControllers.auth)
mobileUserRouters.post('/create-mobile-user', MobileUserValidator.mobileUserValidate('mobileNumber'),procErr,mobileUserControllers.createMobileUser)
mobileUserRouters.post('/verify-mobile-user', mobileUserControllers.verifyMobileUser)
mobileUserRouters.get('/users',mobileUserControllers.getAllMobileUsers)

module.exports = mobileUserRouters