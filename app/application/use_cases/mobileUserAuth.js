const MobileUserRepository = require('../../infrastructure/repositories/MobileUserReposetoryMySQL') 
const AccessTokenManager = require('../../infrastructure/security/AccessTokenManger')
const bcrypt = require('bcrypt')

module.exports = async (password , mobileNumber)=>{
    const user = await MobileUserRepository.findMobileUserByMobileNumber(mobileNumber);
    if(!user) throw Error('User is not found .')
        const result = await bcrypt.compare(password ,user.password )
    if(result)
        return AccessTokenManager.generate(user.id , 'mobileUser'); //data,role
}