const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({restaurantServices}){
        this.restaurantServices = restaurantServices
        this.getAllRestaurants= this.getAllRestaurants.bind(this)
    }
    //all restaurants is done
    async getAllRestaurants(req,res){
        try{
            const result = await this.restaurantServices.listRestaurants()
            if(result.length == 0)
                return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('restaurants'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

}