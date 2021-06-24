module.exports = class{
    constructor({categoryServiceRepository}){
        this.categoryServiceRepository = categoryServiceRepository
        this.getAllCategoryServices= this.getAllCategoryServices.bind(this)
    }

    getAllCategoryServices(){
        return this.categoryServiceRepository.getAllCategoryServices()
    }
}