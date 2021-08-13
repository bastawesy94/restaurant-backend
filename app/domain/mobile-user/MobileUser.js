module.exports = class{
    constructor(userName , mobileNumber , email , password ){ 
        this.userName= userName
        this.mobileNumber = mobileNumber
        this.email= email
        this.password= password
    }
    getUserName(){
        return this.userName
    }
    setUserName(userName){
        this.userName = userName
    }
    getMobileNumber(){
        return this.mobileNumber
    }
    setMobileNumber(mobileNumber){
        this.mobileNumber = mobileNumber
    }
    getEmail(){
        return this.email
    }
    setEmail(email){
        this.email = email
    }
    getPassword(){
        return this.password
    }
    setPassword(password){
        this.password = password
    }
  
}