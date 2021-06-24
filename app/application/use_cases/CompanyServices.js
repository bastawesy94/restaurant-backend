module.exports = class{
    constructor({companyRepository}){
        this.companyRepository = companyRepository
        this.getAllcompanies= this.getAllcompanies.bind(this)
    }

    getAllcompanies(){
        return this.companyRepository.getAllcompanies()
    }
}