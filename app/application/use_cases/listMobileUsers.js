const MobileUserRepository = require('../../infrastructure/repositories/MobileUserReposetoryMySQL') 

module.exports = ()=>{
        return  MobileUserRepository.getAllMobileUsers()
}