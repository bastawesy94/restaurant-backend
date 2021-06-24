module.exports = class{
    constructor({categoryRepository}){
        this.categoryRepository = categoryRepository
        this.getAllCategories= this.getAllCategories.bind(this)
    }

    getAllCategories(){
        return this.categoryRepository.getAllCategories()
    }
}