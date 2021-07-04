module.exports = class{
    constructor({companyRepository}){
        this.companyRepository = companyRepository
        this.getAllCompanies= this.getAllCompanies.bind(this)
        this.getAllCompaniesByCategoryServiceId= this.getAllCompaniesByCategoryServiceId.bind(this)
    }

    getAllCompanies(){
        return this.companyRepository.getAllCompanies()
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