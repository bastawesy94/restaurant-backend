const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({categoryServices}){
        this.categoryServices = categoryServices
        this.getAllCategories= this.getAllCategories.bind(this)
    }
    
    async getAllCategories(req , res){
        try{
            const result= await this.categoryServices.getAllCategories()
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