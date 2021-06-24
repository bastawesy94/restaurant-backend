const CategoryRepo = require('../../domain/category/CategoryRepository')

module.exports = class extends CategoryRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllCategories(){
        return this.db.categoryModel.findAll()
    }

    createCategory(category){
        return this.db.categoryModel.create(category)
    }
}