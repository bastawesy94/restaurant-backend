module.exports= class{
    constructor(text ,companyId,stars){ 
        this.text= text
        this.companyId= companyId
        this.stars= stars
    }
    getText(){
        return this.text
    }
    setText(text){
        this.text= text
    }
    getCompanyId(){
        return this.companyId
    }
    setCompanyId(companyId){
        this.companyId= companyId 
    }
    getStars(){
        return this.stars
    }
    setStars(stars){
        this.stars= stars 
    }
}