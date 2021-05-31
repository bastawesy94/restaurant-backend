const MobileUserRepository = require('../../infrastructure/repositories/MobileUserReposetoryMySQL') 
const MobileUser = require('../../domain/MobileUser')
const bcrypt = require('bcrypt')
module.exports = (mobileNumber , password)=>{
        const createdMobileUser = undefined;
        bcrypt.hash(password, 10, (error, encryptedPassword)=>{
                mobileUser = new MobileUser(mobileNumber ,encryptedPassword);
                reatedMobileUser = MobileUserRepository.createMobileUser(mobileUser);
        });
        return createdMobileUser;

}