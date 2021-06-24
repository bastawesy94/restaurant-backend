const ProductRepo = require('../../domain/product/ProductRepository')

module.exports = class extends ProductRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllProducts(){
        return this.db.productyModel.findAll()
    }

    createProduct(product){
        return this.db.productModel.create(product)
    }
}