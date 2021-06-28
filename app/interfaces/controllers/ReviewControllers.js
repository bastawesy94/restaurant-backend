const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({reviewServices}){
        this.reviewServices = reviewServices
        this.getAllReviews= this.getAllReviews.bind(this)
        this.getAllReviewsByCompanyId= this.getAllReviewsByCompanyId.bind(this)
    }
    
    async getAllReviews(req , res){
        try{
            const result= await this.reviewServices.getAllReviews()
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('reviewDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }
    async getAllReviewsByCompanyId(req , res){
        try{
            const result= await this.reviewServices
                        .getAllReviewsByCompanyId(req.body.companyId)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('reviewDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }
}