module.exports = class{
    constructor(type , coordinates){
        this.type= type
        this.coordinates= coordinates
    }
    
    setType(type){
        this.type= type
    }
    getType(){
        return this.type
    }
    setCoordinates(coordinates){
        this.coordinates= coordinates
    }
    getCoordinates(){
        return this.coordinates
    }
}