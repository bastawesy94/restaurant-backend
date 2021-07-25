const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({productServices}){
        this.productServices = productServices
        this.getAllProducts= this.getAllProducts.bind(this)
        this.getAllProductsByCompanyId= this.getAllProductsByCompanyId.bind(this)
    }
    
    async getAllProducts(req , res){
        try{
            const result= await this.productServices.getAllProducts()
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('productDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }
    async getAllProductsByCompanyId(req , res){
        try{
            const result= await this.productServices
                        .getAllProductsByCompanyId(req.params.companyId)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('productDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }
}