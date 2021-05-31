module.exports = class{
    constructor(mobileNumber , password){ 
        this.mobileNumber = mobileNumber
        this.password = password
    }
    getMobileNumber(){
        return this.mobileNumber
    }
    setMobileNumber(mobileNumber){
        this.mobileNumber = mobileNumber
    }
}