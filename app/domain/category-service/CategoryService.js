module.exports= class{
    constructor(name ,categoryId){ 
        this.name= name
        this.categoryId= categoryId
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name= name
    }
    getCategoryId(){
        return this.categoryId
    }
    setCategoryId(categoryId){
        this.categoryId= categoryId 
    }
}