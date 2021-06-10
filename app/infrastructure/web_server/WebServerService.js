const connection = require('../db/DB_connection/databaseCredentials')

module.exports = class { 

    static getServerINFO(){
        let serverINFO = {
            sequelize :connection.developmentConnection,
            serverType : "local",
            PORT : 8080
        }
        const serverType = process.env.NODE_ENV;
        switch(serverType){
            case "producrion" :
                serverINFO.sequelize =  connection.productionConnection;
                serverINFO.PORT = 8888;
                serverINFO.serverType = "producrion"
                break;
            case "development" :
                serverINFO.sequelize =  connection.developmentConnection;
                serverINFO.PORT = 8080;
                serverINFO.serverType = "development"
                break;
            case "local" :
                serverINFO.sequelize =  connection.localConnection;
                serverINFO.PORT = 8080;
                serverINFO.serverType = "local"
                break;
        }
        return serverINFO;
    }
}