module.exports = class{
    constructor(mobileNumber){ 
        this.mobileNumber = mobileNumber
    }
    getMobileNumber(){
        return this.mobileNumber
    }
    setMobileNumber(mobileNumber){
        this.mobileNumber = mobileNumber
    }
}