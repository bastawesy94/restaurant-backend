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
            if(result[0] === 1)
                 return res.status(200).json(Response.format(200,"sign up process is done."))
             return res.status(400).json(Response.format(400,"sign up process is faild."))
        }   
        catch(error){
            console.log(error)
            return res.status(400).json(Response.format(400,"ERROR , Bad Request is happened .",error.message))
        }
    }

    async getAllMobileUsers(req,res){
        const result = await this.mobileUserServices.listMobileUsers()
        return res.send(result)
    }

    async verifyMobileUser(req,res){
        const result = await this.mobileUserServices.mobileUserIdVerified()
        return res.send(result)
    }

    async auth(req , res){
        try{
            const {password , mobileNumber} = req.body;
            const token = await this.mobileUserServices.mobieleUserAuth(password , mobileNumber);
            console.log("controller token : " + token)
            if(token) 
                return res.header('mobile-user-token' , token).status(200).json(Response.format(200,"Mobile user details.",
                {
                   'mobile-user-token' : token,
                   'mobileNumber' : mobileNumber  
                }))
            return res.status(400).json(Response.format(400,"ERROR ."))
        }
        catch(error){
            return res.status(400).json(Response.format(400,"ERROR , Bad Request is happened .",error.message))
        }
    }

    async createMobileUser(req , res){
        try{
            const {mobileNumber} = req.body;
            const token = await this.mobileUserServices.saveMobileUserNumber(mobileNumber)
            console.log("token : " + token)
            if(typeof token === 'string')
                 return res.header('mobile-user-token' , token).status(200).json(Response.format(200,"Mobile user is saved.",
                      {
                        'mobile-user-token' : token,
                       }))
            return res.status(400).json(Response.format(400,'error'))
        }
        catch(error){
            console.log(error)
            return res.status(400).json(Response.format(400,'error',error))
        }
    }
    
}