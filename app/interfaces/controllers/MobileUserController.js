const listMobileUsers = require('../../application/use_cases/listMobileUsers')
const saveMobileUserNumber = require('../../application/use_cases/saveMobileUserNumber')
const signUp = require('../../application/use_cases/signUp')
const auth = require('../../application/use_cases/mobileUserAuth')
const mobileUserIdVerified = require('../../application/use_cases/mobileUserIdVerified')
const Response = require('../../infrastructure/helper-tools/ResponseFormate')
const registerContainer = require('../../infrastructure/config/DI-setup/DIcontainer');

module.exports = class {
    static async signUp(req , res){
        try{
            const {password} = req.body
            const {mobileUser} = req.mobileUser ;
            console.log(mobileUser) 
            const result = await signUp(mobileUser.mobileNumber, password)
            console.log(typeof result)
            if(result[0] === 1)
                 return res.status(200).json(Response.format(200,"sign up process is done."))
             return res.status(400).json(Response.format(400,"sign up process is faild."))
        }   
        catch(error){
            return res.status(400).json(Response.format(400,"ERROR , Bad Request is happened .",error.message))
        }
    }

    static async auth(req , res){
        try{
            const {password , mobileNumber} = req.body;
            const token = await auth(password , mobileNumber);
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

    static async createMobileUser(req , res){
        try{
            const {mobileNumber} = req.body;
            const token = await saveMobileUserNumber(mobileNumber)
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

    static async getAllMobileUsers(req , res){
        try{
          const current = req.mobileUser ; 
          console.log(current)
          const mobileUsers = await listMobileUsers()
          return res.status(200).json(Response.format(200,'Users has been success .',mobileUsers))
        }   
        catch(error){
            console.log(console.error())
            return res.status(400).json(Response.format(400,error.message))
        }
    }

    static verifyMobileUser(req , res){
        const verificationCode = req.body;
        const isVerified = mobileUserIdVerified(verificationCode)
        if(isVerified)
            return res.status(200).json(Response.format(200,'User is verified ?.',isVerified))
        return res.status(400).json(Response.format(400,'User is verified ?.',isVerified))
    }

    static async show(req , res){
        try{
            // const container = registerContainer()
            // const service = container.resolve('demoInstance');
            
            // const mobileUsers = await service.getAll();
            return res.status(200).json(Response.format(200,'Users has been success .'))
        }   
        catch(error){
            console.log(console.error())
            return res.status(400).json(Response.format(400,error.message))
        }
    }

}