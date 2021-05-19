const express = require('express')
const userRouters = express.Router()
const UserController = require('../controllers/UserController')

userRouters.get('/', UserController.getAllUsers)

module.exports = userRouters