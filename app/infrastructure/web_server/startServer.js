const express = require('express')
const bodyParser = require('body-parser')
const mobileUserRouters = require('../../interfaces/routes/mobileUser')
const DatabaseService = require('../db/databaseService/database')
const connection = require('../config/databaseConfigurations')
const WebServerService = require('./checkServerType')
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

    app.use(bodyParser.json());
    app.use(express.json());
    app.use('/api' , mobileUserRouters);
    app.listen(PORT , ()=>{console.log(`${serverType} Server Running on ${PORT} !`)});
}