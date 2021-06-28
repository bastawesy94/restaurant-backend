module.exports = class{
    constructor({productRepository}){
        this.productRepository = productRepository
        this.getAllProducts= this.getAllProducts.bind(this)
        this.getAllProductsByCompanyId= this.getAllProductsByCompanyId.bind(this)
    }

    getAllProducts(){
        return this.productRepository.getAllProducts()
    }

    getAllProductsByCompanyId(companyId){
        return this.productRepository.getAllProductsByCompanyId(companyId)
    }
}