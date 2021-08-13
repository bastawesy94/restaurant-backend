const express = require('express')
const mobileUserAuth = require('../../interfaces/middleware/mobileUserAuth')
const mobileUserRouters = express.Router()
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer')
const mobileUserControllers = registerContainer().resolve('mobileUserControllers')
const {procErr} = require('../../interfaces/middleware/processError')
const MobileUserValidator = require('../../domain/mobile-user/MobileUserValidator')

mobileUserRouters.post('/mobile-user/signup',MobileUserValidator.mobileUserValidate('signUp'),procErr, mobileUserControllers.signUp)
mobileUserRouters.post('/mobile-user/auth',MobileUserValidator.mobileUserValidate('auth'),procErr, mobileUserControllers.auth)
// mobileUserRouters.post('/mobile-user/create-mobile-user', MobileUserValidator.mobileUserValidate('mobileNumber'),procErr,mobileUserControllers.createMobileUser)
// mobileUserRouters.post('/mobile-user/verify-mobile-user', MobileUserValidator.mobileUserValidate('vereficationCode') ,procErr,mobileUserControllers.verifyMobileUser)
mobileUserRouters.get('/mobile-user/all',mobileUserControllers.getAllMobileUsers)

module.exports = mobileUserRouters