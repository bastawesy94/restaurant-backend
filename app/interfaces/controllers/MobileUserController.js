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
          const {dataValues} = await signUp(mobileNumber , password)
           if(dataValues) return res.status(200).json(Response.format(200,"sign up process is done.",dataValues))
        }   
        catch(error){
            return res.status(500).json(Response.format(500,"ERROR.",error.message))
        }
    }

}