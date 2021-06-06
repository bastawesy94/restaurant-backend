const express = require('express')
const mobileUserAuth = require('../../interfaces/middleware/mobileUserAuth')
const mobileUserRouters = express.Router()
const UserController = require('../controllers/MobileUserController')

mobileUserRouters.get('/all-mobile-users',mobileUserAuth, UserController.getAllMobileUsers)
mobileUserRouters.post('/signUp', UserController.signUp)
mobileUserRouters.post('/auth', UserController.auth)

module.exports = mobileUserRouters