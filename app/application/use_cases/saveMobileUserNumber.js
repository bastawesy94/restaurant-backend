const MobileUser = require('../../domain/IntialMobileUser');
const MobileUserRepo = require('../../infrastructure/repositories/MobileUserReposetoryMySQL')
const AccessTokenManager = require('../../infrastructure/security/AccessTokenManger')

module.exports = async(mobileNumber)=>{
    const mobileUser = await MobileUserRepo.findMobileUserByMobileNumber(mobileNumber);
    if(mobileUser)
        return new Error('mobile user is already exisit.')
    const user = new MobileUser(mobileNumber)
    const createdUser = await MobileUserRepo.createMobileUser(user)
        return AccessTokenManager.generate(createdUser , 'mobileUser'); //data,role
}