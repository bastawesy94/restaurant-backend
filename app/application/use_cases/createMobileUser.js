const MobileUserRepository = require('../../infrastructure/repositories/MobileUserReposetoryMySQL') 
const MobileUserDomain = require('../../domain/MobileUserDomain')

module.exports = (mobileNumber)=>{
        const mobileUserDomain = new MobileUserDomain(mobileNumber)
        return  MobileUserRepository.createMobileUser(mobileUserDomain)
}