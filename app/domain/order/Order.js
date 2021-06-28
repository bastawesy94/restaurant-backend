module.exports= class{
    constructor(mobile_user_id,company_id,product_id,quantity,state){ 
        this.mobile_user_id= mobile_user_id
        this.company_id= company_id
        this.product_id= product_id
        this.quantity= quantity
        this.state= state
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state= state
    }
    getCompanyId(){
        return this.company_id
    }
    setCompanyId(company_id){
        this.company_id= company_id 
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
}