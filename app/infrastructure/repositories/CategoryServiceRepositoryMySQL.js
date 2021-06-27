const CategoryServiceRepo = require('../../domain/category-service/CategoryServiceRepository')

module.exports = class extends CategoryServiceRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCategoryServices(){
        return this.db.CategoryService.findAll()
    }

    getAllCategoryServicesByCategoryId(categoryId){
        return this.db.CategoryService.findAll({
            where :{
                category_id: categoryId
            }
        })
    }

    createCategoryService(categoryService){
        return this.db.CategoryService.create(categoryService)
    }
}