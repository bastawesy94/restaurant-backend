module.exports= class{
    constructor(product_id,mobile_user_id){ 
        this.product_id= product_id
        this.mobile_user_id= mobile_user_id
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name= name
    }
    getProductId(){
        return this.product_id
    }
    setProductId(product_id){
        this.product_id= product_id 
    }
    getMobileUserId(){
        return this.mobile_user_id
    }
    setMobileUserId(mobile_user_id){
        this.mobile_user_id= mobile_user_id 
    }
    getQuantity(){
        return this.quantity
    }
    setQuantity(quantity){
        this.quantity= quantity 
    }
    getIsCompletedOrder(){
        return this.isCompletedOrder
    }
    setIsCompletedOrder(isCompletedOrder){
        this.isCompletedOrder= isCompletedOrder 
    }
}