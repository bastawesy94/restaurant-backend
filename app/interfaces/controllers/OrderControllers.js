const Order = require('../../domain/order/Order')
const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({orderServices ,cartServices}){
        this.cartServices= cartServices
        this.orderServices = orderServices
        this.getAllOrders= this.getAllOrders.bind(this)
        this.getAllOrdersByCompanyId= this.getAllOrdersByCompanyId.bind(this)
        this.getAllOrdersByMobileUserId= this.getAllOrdersByMobileUserId.bind(this)
        this.createOrder= this.createOrder.bind(this)
    }
    
    async createOrder(req , res){
        try{
            const mobileUserId= req.mobileUser.mobileUser
            const items= await this.cartServices.getAllCarts(mobileUserId)
            // let counter= 0
            for(let itemIndex in items){
                const order= new Order(mobileUserId ,items[itemIndex].product_id,items[itemIndex].quantity)
                await this.orderServices.createOrder(order)
            }
            return res.status(200).json(Response.format(200,req.polyglot.t('orderCreated')))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    async getAllOrders(req , res){
        try{
            const result= await this.orderServices.getAllOrders()
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('orderDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    async getAllOrdersByCompanyId(req , res){
        try{
            const result= await this.orderServices
                        .getAllOrdersByCompanyId(req.body.companyId)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('orderDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    async getAllOrdersByMobileUserId(req , res){
        try{
            const result= await this.orderServices
                        .getAllOrdersByMobileUserId(req.body.mobileUserId)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('orderDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }
}