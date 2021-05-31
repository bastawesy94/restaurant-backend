const listMobileUsers = require('../../application/use_cases/listMobileUsers')
const signUp = require('../../application/use_cases/signUp')
const MobileUser = require('../../domain/MobileUser')
const Response = require('../../infrastructure/helper-tools/ResponseFormate')

module.exports = class {

    static async getAllMobileUsers(req , res){
        try{
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
          const saved = await signUp(mobileNumber , password)
          console.log("return of service : " + saved)
          saved ? res.status(200).json(Response.format(200,"New User Saved.",mobileUser)):
          res.status(400).json(Response.format(400,"sign up process is faild."))
        }   
        catch(error){
            console.log(error)
            return res.status(500).json(Response.format(500,error.message))

        }
    }

}