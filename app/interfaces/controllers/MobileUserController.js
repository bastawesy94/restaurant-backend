const listMobileUsers = require('../../application/use_cases/listMobileUsers')
const createMobileUser = require('../../application/use_cases/createMobileUser')

module.exports = class {

    static async getAllMobileUsers(req , res){
        try{
          const mobileUsers = await listMobileUsers()
          return  res.send(mobileUsers)
        }   
        catch(error){
            console.log(console.error())
        }
    }

    static async createMobileUser(req , res){
        try{
        //   MobileUserDomain.setMobileNumber(req.body.mobileNumber)
          const result = await createMobileUser("46465465654")
          return  res.status(200).send(result)
        }   
        catch(error){
            console.log(console.error())
            return  res.status(500).send(error.message)

        }
    }

}