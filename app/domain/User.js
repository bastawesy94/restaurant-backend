module.exports = class{
    constructor(id , firstName , lastName , email , password){
        this.id = id 
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
    }
    getId(){
        return this.id
    }
    setId(id){
        this.id = id
    }
    getFirstNAme(){
        return this.firstName
    }
    setFirstNAme(id){
        this.firstName = this.firstName
    }
}