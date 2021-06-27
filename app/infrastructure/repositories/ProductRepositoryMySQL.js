const ProductRepo = require('../../domain/product/ProductRepository')

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
}