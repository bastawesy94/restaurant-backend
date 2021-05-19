const listUsers = require('../../application/use_cases/listUsers')

module.exports = class {

    static async getAllUsers(req , res){
        try{
          const users = await listUsers()
          console.log("control!!")
          return  res.send(users)
        }   
        catch(error){
            console.log(console.error())
        }
    }

}