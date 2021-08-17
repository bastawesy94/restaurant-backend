const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({restaurantServices, mobileUserServices}){
        this.restaurantServices = restaurantServices
        this.mobileUserServices = mobileUserServices
        this.getAllRestaurants= this.getAllRestaurants.bind(this)
        this.createRestaurant= this.createRestaurant.bind(this)
        this.updateRestaurant= this.updateRestaurant.bind(this)
        this.deleteRestaurant= this.deleteRestaurant.bind(this)
        this.findRestaurantByName= this.findRestaurantByName.bind(this)
        this.getRestaurantById= this.getRestaurantById.bind(this)
        this.findRestaurantByAddress= this.findRestaurantByAddress.bind(this)
    }
    //get all restaurants 
    async getAllRestaurants(req,res){
        try{
            const result = await this.restaurantServices.listRestaurants()
            if(result.length == 0)
                return res.status(404).json(Response.format(404,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('restaurants'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
     //get restaurant details
     async getRestaurantById(req,res){
        try{
            const result = await this.restaurantServices.getRestaurantById(req.params.restaurantId)
            if(!result)
                return res.status(404).json(Response.format(404,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('restaurants'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
      //get restaurant by name 
      async findRestaurantByName(req,res){
        try{
            const result = await this.restaurantServices.findRestaurantByName(req.body.name)
            if(!result)
                return res.status(404).json(Response.format(404,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('restaurants'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
      //get all restaurants by address 
      async findRestaurantByAddress(req,res){
        try{
            const result = await this.restaurantServices.findRestaurantByAddress(req.body.address)
            if(!result)
                return res.status(404).json(Response.format(404,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('restaurants'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
    //create restaurant 
    async createRestaurant(req , res){
        try{
            const mobileUserId= req.mobileUser.mobileUser
            const { name , address} = req.body
            const result = await this.restaurantServices.createRestaurant(mobileUserId , name , address)
            if(result)
                return res.status(200).json(Response.format(200,req.polyglot.t('restaurantCreated'),result))
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
      //update restaurant 
      async updateRestaurant(req , res){
        try{
            const { name , address} = req.body
            const restaurantId = req.params.restaurantId 
            const mobileUserId= req.mobileUser.mobileUser
            const isYourRestau = await this.restaurantServices.isYourOwnRestaurant(mobileUserId , restaurantId)
            if(!isYourRestau)
            return res.status(401).json(Response.format(401,req.polyglot.t('permissionError')))
                 const result = await this.restaurantServices.updateRestaurant(restaurantId, name , address)
            if(result[0] === 1)
                return res.status(200).json(Response.format(200,req.polyglot.t('restaurantCreated'),result))
            return res.status(400).json(Response.format(400,req.polyglot.t('serverError'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
     //remove restaurant 
     async deleteRestaurant(req , res){
        try{
            const restaurantId = req.params.restaurantId 
            const mobileUserId= req.mobileUser.mobileUser
            const isYourRestau = await this.restaurantServices.isYourOwnRestaurant(mobileUserId , restaurantId)
            if(!isYourRestau)
            return res.status(401).json(Response.format(401,req.polyglot.t('permissionError')))
                 const result = await this.restaurantServices.removeRestaurant(restaurantId)
            if(result === 1)
                return res.status(200).json(Response.format(200,req.polyglot.t('restaurantDeleted'),result))
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
}