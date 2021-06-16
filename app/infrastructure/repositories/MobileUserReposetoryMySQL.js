const UserRepo = require('../../domain/mobile-user/MobileUserRepository')

module.exports = class extends UserRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllMobileUsers(){
        return this.db.userModel.findAll()
    }

    createMobileUser(user){
        return this.db.userModel.create(user)
    }

    findMobileUserByMobileNumber(mobileNumber){
        return this.db.userModel.findOne({
            where :{
                mobileNumber : mobileNumber
            }  
        })
    }

    addPasswordtoCurrentMobileUser(user){
        return this.db.userModel.update(
            {
                password : user.password
            },
            {
            where :{
                 mobileNumber : user.mobileNumber
            }  
        })
    }
}