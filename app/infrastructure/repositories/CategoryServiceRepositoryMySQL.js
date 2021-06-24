const CategoryServiceRepo = require('../../domain/category-service/CategoryServiceRepository')

module.exports = class extends CategoryServiceRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCategoryServices(){
        return this.db.categoryServiceModel.findAll()
    }

    createCategoryService(categoryService){
        return this.db.categoryServiceModel.create(categoryService)
    }
}