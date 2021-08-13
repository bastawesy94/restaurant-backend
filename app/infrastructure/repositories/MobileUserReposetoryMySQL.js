const UserRepo = require('../../domain/mobile-user/MobileUserRepository')
const { sequelize, QueryTypes } = require('sequelize');

module.exports = class extends UserRepo{
   constructor({db}){
       super()
       this.db = db
   }
   createMobileUser(user){
    return this.db.MobileUser.create(user)
    }
    getAllMobileUsers(){
        return this.db.MobileUser.findAll()
    }
    findMobileUserByUserName(userName){
        return this.db.MobileUser.findOne({
            where: {userName : userName}  
        }) 
    }
}