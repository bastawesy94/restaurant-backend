module.exports= class{
    constructor(name ,companyId,cost,quantity){ 
        this.name= name
        this.companyId= companyId
        this.cost= cost
        this.quantity= quantity
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name= name
    }
    getCompanyId(){
        return this.companyId
    }
    setCompanyId(companyId){
        this.companyId= companyId 
    }
    getCost(){
        return this.cost
    }
    setCost(cost){
        this.cost= cost 
    }
    getQuantity(){
        return this.quantity
    }
    setQuantity(quantity){
        this.quantity= quantity 
    }
}