module.exports = class{
    constructor({productRepository}){
        this.productRepository = productRepository
        this.getAllProducts= this.getAllProducts.bind(this)
    }

    getAllProducts(){
        return this.productRepository.getAllProducts()
    }
}