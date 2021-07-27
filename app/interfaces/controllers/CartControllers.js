const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({cartServices}){
        this.cartServices = cartServices
        this.getAllCarts= this.getAllCarts.bind(this)
        this.createCart= this.createCart.bind(this)
        this.removeCart= this.removeCart.bind(this)
    }
    
    async getAllCarts(req , res){
        try{
            const mobileUserId= req.mobileUser.mobileUser
            const result= await this.cartServices.getAllCarts(mobileUserId)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('cartDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
    async createCart(req , res){
        try{
            const {productId} = req.body
            const mobileUserId = req.mobileUser.mobileUser
            console.log("user id: " + mobileUserId)
            const result= await this.cartServices.createCart(productId ,mobileUserId)
            console.log("result : " + result)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('cartDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }    
    }
    async removeCart(req , res){
        const {itemId} = req.params
        const result= await this.cartServices.removeCart(itemId)
        if(result !== 1)
            return res.status(400).json(Response.format(500,req.polyglot.t('deleteError')))
        return res.status(200).json(Response.format(200,req.polyglot.t('deleteSuccess'),result))
    }
}