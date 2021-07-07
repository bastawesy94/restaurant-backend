module.exports = class{
    constructor({companyRepository}){
        this.companyRepository = companyRepository
        this.getAllCompanies= this.getAllCompanies.bind(this)
        this.getAllCompaniesByCategoryServiceId= this.getAllCompaniesByCategoryServiceId.bind(this)
        this.getCompanyById= this.getCompanyById.bind(this)
    }

    getAllCompanies(){
        return this.companyRepository.getAllCompanies()
    }

    getCompanyById(companyId){
        return this.companyRepository.getCompanyById(companyId)
    }

    getAllCompaniesByCategoryServiceId(categoryServiceId){
        return this.companyRepository.getAllCompaniesByCategoryServiceId(categoryServiceId)
    }

    getAllCompaniesByCategoryServiceIds(categoryServiceIds){
        return this.companyRepository.getAllCompaniesByCategoryServiceIds(categoryServiceIds)
    }
    getAllCompaniesWithRate(){
        return this.companyRepository.getAllCompaniesWithRate()
    }

    getAllCompaniesWithRatesByCategoryId(categoryId){
        return this.companyRepository.getAllCompaniesWithRatesByCategoryId(categoryId)
    }

}