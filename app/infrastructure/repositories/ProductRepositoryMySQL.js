const ProductRepo = require('../../domain/product/ProductRepository')
const { sequelize, QueryTypes } = require('sequelize');

module.exports = class extends ProductRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllProducts(){
        return this.db.Product.findAll()
    }

    createProduct(product){
        return this.db.Product.create(product)
    }

    getAllProductsByCompanyId(companyId){
        return this.db.sequelize.query('SELECT product.id , product.name , AVG(review.stars) as rating FROM product LEFT JOIN review ON review.product_id = product.id LEFT JOIN company ON company.id = product.company_id WHERE company.id= $1 GROUP BY product.id',{
            bind: [companyId],
            type: QueryTypes.SELECT
        })
    }

    getProductRateByProductId(productId){
        return this.db.sequelize.query('SELECT product.id , product.name , AVG(review.stars) as rating FROM product LEFT JOIN review ON review.product_id = product.id WHERE review.product_id= $1 GROUP BY product.id',{
            bind: [productId],
            type: QueryTypes.SELECT
        })
    }

}