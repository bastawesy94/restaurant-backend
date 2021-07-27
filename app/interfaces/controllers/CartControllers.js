const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({cartServices}){
        this.cartServices = cartServices
        this.getAllCarts= this.getAllCarts.bind(this)
        this.createCart= this.createCart.bind(this)
        this.removeCart= this.removeCart.bind(this)
        this.updateCart= this.updateCart.bind(this)
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
            const existItem= await this.cartServices.isProductInCart(productId,mobileUserId)
            if(existItem){
                const incrementedItem= await this.cartServices.incrementQuantityCart(existItem.id,mobileUserId)
                return res.status(200).json(Response.format(200,req.polyglot.t('savedItemOfCart')))
            }
            const result= await this.cartServices.createCart(productId ,mobileUserId)
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

    async updateCart(req , res){
        try{
            const {data} = req.body
            const mobileUserId= req.mobileUser.mobileUser
            console.log("######## mobileUserId ####### " + mobileUserId)
            for(let itemIndex in data){
                console.log("######## id ####### " + data[itemIndex].id)
                console.log("######### quanntity ###### " + data[itemIndex].quantity)
                const resultOfUpdate= await this.cartServices.updateCart(data[itemIndex].id , mobileUserId , data[itemIndex].quantity)
                console.log("resultOfUpdate : " + resultOfUpdate)
            }
            return res.status(200).json(Response.format(200,req.polyglot.t('savedItemOfCart')))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }    
    }
}