const CompanyRepo = require('../../domain/company/CompanyRepository')

module.exports = class extends CompanyRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCompanies(){
        return this.db.companyModel.findAll()
    }

    createCompany(company){
        return this.db.companyModel.create(company)
    }
}