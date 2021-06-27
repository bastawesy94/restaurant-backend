const CompanyRepo = require('../../domain/company/CompanyRepository')

module.exports = class extends CompanyRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCompanies(){
        return this.db.Company.findAll()
    }

    createCompany(company){
        return this.db.Company.create(company)
    }
}