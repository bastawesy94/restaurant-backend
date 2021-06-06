const listMobileUsers = require('../../application/use_cases/listMobileUsers')
const signUp = require('../../application/use_cases/signUp')
const auth = require('../../application/use_cases/mobileUserAuth')
const Response = require('../../infrastructure/helper-tools/ResponseFormate')

module.exports = class {

    static async getAllMobileUsers(req , res){
        try{
          const current = req.mobileUser ; 
          console.log(current)
          const mobileUsers = await listMobileUsers()
          return res.status(200).json(Response.format(200,'Users has been success .',mobileUsers))
        }   
        catch(error){
            console.log(console.error())
            return res.status(400).json(Response.format(400,mobileUsers,error.message))
        }
    }

    static async signUp(req , res){
        try{
          const {password , mobileNumber } = req.body
          const {dataValues} = await signUp(mobileNumber , password)
           if(dataValues) return res.status(200).json(Response.format(200,"sign up process is done.",dataValues))
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

}