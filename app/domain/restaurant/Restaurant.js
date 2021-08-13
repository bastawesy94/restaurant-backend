module.exports = class{
    constructor(mobile_user_id ,name , address){
        this.mobile_user_id= mobile_user_id 
        this.name = name
        this.address = address
    }
    getMobileUserId(){
        return this.mobile_user_id
    }
    setMobileUserId(mobile_user_id){
        this.mobile_user_id = mobile_user_id
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    getAddress(){
        return this.address
    }
    setAddress(address){
        this.address = address
    }
}