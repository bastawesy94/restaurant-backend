class WebServerService {
    
    static isProductionServer(){
        return process.env.NODE_ENV === "production"
    }
}
module.exports = WebServerService