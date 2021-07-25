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
        return this.db.Product.findAll({
            where:{company_id: companyId}
        })
    }

    getProductRateByProductId(productId){
        return this.db.sequelize.query('SELECT product.id , product.name , AVG(review.stars) as rating FROM product LEFT JOIN review ON review.product_id = product.id WHERE review.product_id= $1 GROUP BY product.id',{
            bind: [productId],
            type: QueryTypes.SELECT
        })
    }

}