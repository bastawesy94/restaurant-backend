const UserRepo = require('../../domain/mobile-user/MobileUserRepository')
const { sequelize, QueryTypes } = require('sequelize');

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

    saveMobileUserLocationPoint(location ,mobileUserId){
        // const line = { type: 'Point', 'coordinates': [100.0, 0.0] };
        return this.db.MobileUser.update(
            {location : location},
            {
            where :{id : mobileUserId}  
        }) 
    }
}