const CompanyRepo = require('../../domain/company/CompanyRepository')
const { sequelize, QueryTypes } = require('sequelize');

module.exports = class extends CompanyRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCompanies(){
        // return this.db.Company.findAll(
            const id = '1'
            return this.db.sequelize.query('SELECT company.name , AVG(stars) as rating FROM company  , review where company.id =review.id and category_service_id = $1 GROUP BY company.name',{
                bind: [id],
                model: this.db.Company,
                type: QueryTypes.SELECT
            })
    }

    createCompany(company){
        return this.db.Company.create(company)
    }

    getAllCompaniesByCategoryServiceId(categoryServiceId){
        return this.db.Company.findAll({
            where:{category_service_id: categoryServiceId},
            include: {
                model: this.db.Review,
            },
        })
    }

    getAllCompaniesByCategoryServiceIds(categoryServiceIds){
        return this.db.Company.find1All({
            where:{category_service_id: categoryServiceIds}
        })
    }
}