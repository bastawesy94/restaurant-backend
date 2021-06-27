const UserRepo = require('../../domain/mobile-user/MobileUserRepository')

module.exports = class extends UserRepo{
   constructor({db}){
       super()
       this.db = db
   }

    getAllMobileUsers(){
        return this.db.MobileUser.findAll()
    }

    createMobileUser(user){
        return this.db.MobileUser.create(user)
    }

    findMobileUserByMobileNumber(mobileNumber){
        return this.db.MobileUser.findOne({
            where: {mobileNumber : mobileNumber}  
        })
    }

    addPasswordtoCurrentMobileUser(user){
        return this.db.MobileUser.update(
        {password : user.password},
        {
        where :{mobileNumber : user.mobileNumber}  
        })
    }
}