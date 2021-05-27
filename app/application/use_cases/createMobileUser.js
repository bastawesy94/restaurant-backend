const MobileUserRepository = require('../../infrastructure/repositories/MobileUserReposetoryMySQL') 
const MobileUser = require('../../domain/MobileUser')

module.exports = (mobileNumber)=>{
        const mobileUser = new MobileUser(mobileNumber)
        return  MobileUserRepository.createMobileUser(mobileUser)
}