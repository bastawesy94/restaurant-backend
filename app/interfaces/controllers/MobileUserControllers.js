const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({mobileUserServices}){
        this.mobileUserServices = mobileUserServices
        this.signUp = this.signUp.bind(this)
        this.auth = this.auth.bind(this)
        this.getAllMobileUsers= this.getAllMobileUsers.bind(this)
    }
    //sign up is done
    async signUp(req , res){
        try{
            const {userName , mobileNumber , email , password} = req.body
            const result = await this.mobileUserServices.signUpMobileUser(userName , mobileNumber , email , password)
            console.log("########### created user ########### : " + result)
            if(result)
                return res.status(200).json(Response.format(200,req.polyglot.t('signUpComplete'),result))
             return res.status(400).json(Response.format(400,req.polyglot.t('signUpError') , result.message))
        }   
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    //all users is done
    async getAllMobileUsers(req,res){
        try{
            const result = await this.mobileUserServices.listMobileUsers()
            if(result.length == 0)
                return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('mobileUsers'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    //authorization is done
    async auth(req , res){
        try{
            const {password , userName} = req.body;
            const result = await this.mobileUserServices.mobieleUserAuth(password , userName);
            console.log("controller token : " + result)
            if(typeof result === 'string')
                return res.header('mobile-user-token' , result).status(200).json(Response.format(200,"Mobile user details.",
                {
                   'mobile-user-token' : result,
                   'userName' : userName  
                }))
            return res.status(400).json(Response.format(400,req.polyglot.t('authFaild')))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
}