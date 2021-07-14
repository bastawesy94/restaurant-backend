const CompanyRepo = require('../../domain/company/CompanyRepository')
const { sequelize, QueryTypes } = require('sequelize');

module.exports = class extends CompanyRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCompanies(){
        return this.db.Company.findAll()
    }

    getCompanyById(companyId){
        return this.db.Company.findOne({
            where:{id: companyId}
        })
    }

    createCompany(company){
        return this.db.Company.create(company)
    }

    getAllCompaniesByCategoryServiceId(categoryServiceId){
            return this.db.sequelize.query('SELECT company.name , AVG(review.stars) as rating FROM company INNER JOIN review ON review.company_id = company.id WHERE company.category_service_id= $1 GROUP BY company.name',{
                bind: [categoryServiceId],
                model: this.db.Company,
                type: QueryTypes.SELECT
            })
    }

    getAllCompaniesByCategoryServiceIds(categoryServiceIds){
        return this.db.Company.findAll({
            where:{category_service_id: categoryServiceIds}
        })
    }

    getAllCompaniesWithRatesByCategoryId(categoryId){
        return this.db.sequelize.query('SELECT company.name , AVG(review.stars) as rating FROM company INNER JOIN review ON review.company_id = company.id INNER JOIN category_service ON company.category_Service_id = category_service.id WHERE category_service.category_id=1 GROUP BY company.name',{
            // bind: [categoryId],
            model: this.db.Company,
            type: QueryTypes.SELECT
        })
    }

    getAllCompaniesWithRate(){
            return this.db.sequelize.query('SELECT company.name , AVG(review.stars) as rating FROM company INNER JOIN review ON review.company_id = company.id GROUP BY company.name',{
                model: this.db.Company,
                type: QueryTypes.SELECT
            })
    }
}