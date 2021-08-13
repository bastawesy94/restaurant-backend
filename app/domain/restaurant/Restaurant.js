module.exports = class{
    constructor(mobileUserId ,name , addrees){
        this.mobileUserId= mobileUserId 
        this.name = name
        this.addrees = addrees
    }
    getMobileUserId(){
        return this.mobileUserId
    }
    setMobileUserId(mobileUserId){
        this.mobileUserId = mobileUserId
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    getAddress(){
        return this.addrees
    }
    setAddress(addrees){
        this.addrees = addrees
    }
}