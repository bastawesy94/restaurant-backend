const Response = require('../serializers/ResponseFormate')

module.exports = class{
    constructor({mobileUserServices}){
        this.mobileUserServices = mobileUserServices
        this.getAllMobileUsers = this.getAllMobileUsers.bind(this)
        this.verifyMobileUser = this.verifyMobileUser.bind(this)
        this.auth = this.auth.bind(this)
        this.createMobileUser = this.createMobileUser.bind(this)
        this.signUp = this.signUp.bind(this)
    }

    async signUp(req , res){
        try{
            const {password} = req.body
            const {mobileUser} = req.mobileUser ;
            const result = await this.mobileUserServices.signUpMobileUser(mobileUser.mobileNumber, password)
            console.log("result :" + result)
            if(result[0] === 1)
                return res.status(200).json(Response.format(200,req.polyglot.t('signUpComplete')))
             return res.status(400).json(Response.format(400,req.polyglot.t('passwordError') , result.message))
        }   
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    async getAllMobileUsers(req,res){
        try{
            const result = await this.mobileUserServices.listMobileUsers()
            if(result.length == 0)
                return res.status(200).json(Response.format(200,req.polyglot.t('emptyrResponse'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('usersDetails'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    async verifyMobileUser(req,res){
        try{
            const result = await this.mobileUserServices.mobileUserIdVerified()
            if(!result)
                   return res.status(400).json(Response.format(400,req.polyglot.t('verifyfaild'),result))
            return res.status(200).json(Response.format(200,req.polyglot.t('verifySuccess'),result))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }    
    }

    async auth(req , res){
        try{
            const {password , mobileNumber} = req.body;
            const result = await this.mobileUserServices.mobieleUserAuth(password , mobileNumber);
            console.log("controller token : " + result)
            if(typeof result === 'string')
                return res.header('mobile-user-token' , result).status(200).json(Response.format(200,"Mobile user details.",
                {
                   'mobile-user-token' : result,
                   'mobileNumber' : mobileNumber  
                }))
            return res.status(400).json(Response.format(400,req.polyglot.t('authFaild') ,result.message))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }

    async createMobileUser(req , res){
        try{
            const {mobileNumber} = req.body;
            const result = await this.mobileUserServices.saveMobileUserNumber(mobileNumber)
            console.log("token : " + result)
            if(typeof result === 'string')
                 return res.header('mobile-user-token' , result).status(200).json(Response.format(200,req.polyglot.t('mobileSaved'),
                      {
                        'mobile-user-token' : result,
                       }))
            return res.status(400).json(Response.format(400,req.polyglot.t('addNumberError'), result.message))
        }
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,req.polyglot.t('serverError'),error.message))
        }
    }
    
}