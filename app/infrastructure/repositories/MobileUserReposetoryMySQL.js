const UserRepo = require('../../domain/MobileUserRepository')
const db = require('../../infrastructure/db/models/index')
module.exports = class extends UserRepo{
   
    static getAllMobileUsers(){
        const users = db.userModel.findAll()
        return users;
    }

    static createMobileUser(user){
        return db.userModel.create(user)
    }
    static findMobileUserByMobileNumber(mobileNumber){
        return db.userModel.findOne({
            where :{
                mobileNumber : mobileNumber
            }  
        })
    }
    static addPasswordtoCurrentMobileUser(user){
        return db.userModel.update(
            {
                password : user.password
            },
            {where :{
                mobileNumber : user.mobileNumber
            }  
        })
    }
}