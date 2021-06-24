module.exports= class{
    constructor(name ,serviceId){ 
        this.name= name
        this.serviceId= serviceId
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
}