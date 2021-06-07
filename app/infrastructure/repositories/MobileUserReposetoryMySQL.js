const db = require('../db/models/index')
const UserRepo = require('../../domain/MobileUserRepository')

module.exports = class extends UserRepo{
   
    static getAllMobileUsers(){
        return db.userModel.findAll()
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