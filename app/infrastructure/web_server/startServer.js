const express = require('express')
const mobileUserRouters = require('../../interfaces/routes/mobileUser')
const DatabaseService = require('../db/databaseService/database')
const WebServerService = require('./WebServerService')
require('dotenv/config')

module.exports =()=>{
    const {PORT , serverType ,sequelize} = WebServerService.getServerINFO()
    const app = express()
    DatabaseService.testConnection(sequelize)
    app.use(express.json());
    app.use('/api' , mobileUserRouters);
    app.listen(PORT,()=>{console.log(`${serverType} Server Running on ${PORT} !`)});

}