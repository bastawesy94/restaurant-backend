const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({companyServices}){
        this.companyServices = companyServices
        this.getAllCompanies= this.getAllCompanies.bind(this)
        this.getAllCompaniesByCategoryServiceId= this.getAllCompaniesByCategoryServiceId.bind(this)
    }
    
    async getAllCompanies(req , res){
        try{
            const result= await this.companyServices.getAllCompanies()
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('productDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }
    async getAllCompaniesByCategoryServiceId(req , res){
        try{
            const result= await this.companyServices
                        .getAllCompaniesByCategoryServiceId(req.body.categoryServiceId)
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