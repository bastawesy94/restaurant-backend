const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({companyServices ,categoryServiceServices}){
        this.companyServices = companyServices
        this.categoryServiceServices = categoryServiceServices
        this.getAllCompanies= this.getAllCompanies.bind(this)
        this.getAllCompaniesByCategoryServiceId= this.getAllCompaniesByCategoryServiceId.bind(this)
        this.getAllCompaniesByCategoryId= this.getAllCompaniesByCategoryId.bind(this)
        this.getAllCompaniesWithRate= this.getAllCompaniesWithRate.bind(this)
        this.getAllCompaniesWithRatesByCategoryId= this.getAllCompaniesWithRatesByCategoryId.bind(this)
        this.getCompanyById= this.getCompanyById.bind(this)
    }
    
    async getAllCompanies(req , res){
        try{
            const result= await this.companyServices.getAllCompanies()
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('companyDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
        
    }

    async getCompanyById(req, res){
        try{
            const result= await this.companyServices.getCompanyById(req.params.id)
            console.log(req.params.id)
            console.log(result)
            if(!result)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('companyProfileDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    async getAllCompaniesByCategoryServiceId(req , res){
        try{
            const result= await this.companyServices
                        .getAllCompaniesByCategoryServiceId(req.params.categoryServiceId)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('productDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }   
    }

    async getAllCompaniesByCategoryId(req , res){
        try{
            const {categoryId}= req.body
            let serviceIds= []
            const services= await this.categoryServiceServices
                        .getAllCategoryServicesByCategoryId(categoryId)
            for(let serviceIndex in services)
                serviceIds.push(services[serviceIndex].id)
            if(serviceIds.length === 0)
                   return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse')))    
            const result= await this.companyServices
                        .getAllCompaniesByCategoryServiceIds(serviceIds)
            if(result.length == 0)
               return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('categoryDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }   
    }

    async getAllCompaniesWithRatesByCategoryId(req,res){
        try{
            console.log("##############getAllCompaniesWithRatesByCategoryId#########################")
            const result= await this.companyServices.getAllCompaniesWithRatesByCategoryId(req.params.cateoryId)//req.body.categoryId
             if(result.length == 0)
             return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('companyDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }   
    }

    async getAllCompaniesWithRate(req,res){
        const result= await this.companyServices.getAllCompaniesWithRate()
        if(result.length == 0)
             return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
       return res.status(200).json(Response.format(200,req.polyglot.t('companyDetails'),result))
    }
}