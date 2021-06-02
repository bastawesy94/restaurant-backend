const MobileUserRepository = require('../../infrastructure/repositories/MobileUserReposetoryMySQL') 
const MobileUser = require('../../domain/MobileUser')
const bcrypt = require('bcrypt')
const PasswordEncryption = require('../../infrastructure/security/PasswordEncryption')
module.exports = async(mobileNumber , password)=>{
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds).then((encryptedPassword)=> {
                const mobileUser = new MobileUser(mobileNumber ,encryptedPassword);
                return MobileUserRepository.createMobileUser(mobileUser)
            },
            (error)=> {
                return error;
            });
}