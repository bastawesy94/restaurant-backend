const express = require('express')
const userRoutes = require('../../interfaces/routes/users')
const DatabaseService = require('../db/databaseService/database')
const connection = require('../config/databaseConfigurations')
const WebServerService = require('./webServer')
const db = require('../db/models/index')
require('dotenv/config')

module.exports =()=>{
    const app = express()
    const isProduction = WebServerService.isProductionServer()
    let connectionServer = {}
    let PORT = {}
    let serverType = {}
    if(isProduction){
      PORT = process.env.PROD_SERVER_PORT 
      connectionServer =  connection.productionConnection 
      serverType = "Production"
    } 
    else{
      PORT =  process.env.DEV_SERVER_PORT
      connectionServer = connection.developmentConnection
      serverType = "Development"
    } 
    DatabaseService.testConnection(db.sequelize)

    app.use('/api' , userRoutes)
    app.listen(PORT , ()=>{console.log(`${serverType} Server Running on ${PORT} !`)})
}