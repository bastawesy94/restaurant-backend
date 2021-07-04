module.exports= class{
    constructor(name ,serviceId ,mobileNumber, email, website, point){ 
        this.name= name
        this.serviceId= serviceId
        this.mobileNumber= mobileNumber
        this.email= email
        this.website= website
        this.point= point
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name= name
    }
    getServiceId(){
        return this.serviceId
    }
    setServiceId(serviceId){
        this.serviceId= serviceId 
    }

    getMobileNumber(){
        return this.mobileNumber
    }
    setMobileNumber(mobileNumber){
        this.mobileNumber= mobileNumber 
    }
    getWebsite(){
        return this.website
    }
    setWebsite(website){
        this.website= website 
    }
    getEmail(){
        return this.serviceId
    }
    setEmail(email){
        this.email= email 
    }
    getPoint(){
        return this.serviceId
    }
    setPoint(point){
        this.point= point 
    }
}