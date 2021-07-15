const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({categoryServiceServices}){
        this.categoryServiceServices = categoryServiceServices
        this.getAllCategoryServices= this.getAllCategoryServices.bind(this)
        this.getAllCategoryServicesByCategoryId= this.getAllCategoryServicesByCategoryId.bind(this)
    }
    
    async getAllCategoryServices(req , res){
        try{
            const result= await this.categoryServiceServices.getAllCategoryServices()
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('categoryDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }
    async getAllCategoryServicesByCategoryId(req , res){
        try{
            const result= await this.categoryServiceServices
                        .getAllCategoryServicesByCategoryId(req.params.categoryId)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('categoryDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }
}