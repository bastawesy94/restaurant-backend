const express = require('express')
const createLocaleMiddleware = require('express-locale')
const {startPolyglot} = require ('../../interfaces/middleware/determinLnaguage')
const mobileUserRouters = require('../../interfaces/routes/mobileUser')
const categoryRouters = require('../../interfaces/routes/category')
const categoryServiceRouters = require('../../interfaces/routes/categoryService')
const companyRouters = require('../../interfaces/routes/company')

const DatabaseService = require('../db/databaseService/database')
const WebServerService = require('./WebServerService')
require('dotenv/config')

module.exports =()=>{
    const {PORT , serverType ,sequelize} = WebServerService.getServerINFO()
    const app = express()
    app.use(createLocaleMiddleware({
        "priority": ["accept-language", "default"],
        "default": "en_US"
    }))
    app.use(startPolyglot)
    app.use(express.json());
    app.use('/api' , mobileUserRouters);
    app.use('/api' , categoryRouters);
    app.use('/api' , categoryServiceRouters);
    app.use('/api' , companyRouters);

    DatabaseService.testConnection(sequelize)
    app.listen(PORT,()=>{console.log(`${serverType} Server Running on ${PORT} !`)});
}