const AccessTokenManager = require('../../infrastructure/security/AccessTokenManger')
const bcrypt = require('bcrypt')
const IntialMobileUser = require('../../domain/mobile-user/IntialMobileUser');
const MobileUser = require('../../domain/mobile-user/MobileUser');
const isValidSaudiMobileNumber = require('../utilities/isValidSaudiMobileNumber')
module.exports = class {
        constructor({mobileUserRepository}){
                this.mobileUserRepository = mobileUserRepository
              
        }
        async listMobileUsers(){
                return await this.mobileUserRepository.getAllMobileUsers()
        }

        async mobieleUserAuth(password , mobileNumber){
                if(!isValidSaudiMobileNumber(mobileNumber)) 
                        return new Error('mobile user invalid , it must starts with 50,53,54,55,56,58 or 59.')    
                const user = await this.mobileUserRepository.findMobileUserByMobileNumber(mobileNumber);
                if(!user) throw Error('User is not found .')
                        const result = await bcrypt.compare(password ,user.password )
                if(result)
                        return AccessTokenManager.generate(user.id , 'mobileUser'); //data,role
        }

        async saveMobileUserNumber(mobileNumber){
                const mobileUser = await this.mobileUserRepository.findMobileUserByMobileNumber(mobileNumber);
                if(mobileUser)
                        return new Error('mobile user is already exisit.')
                if(!isValidSaudiMobileNumber(mobileNumber)) 
                        return new Error('mobile user invalid , it must starts with 50,53,54,55,56,58 or 59.')    
                const user = new IntialMobileUser(mobileNumber)
                const createdUser = await this.mobileUserRepository.createMobileUser(user)
                return AccessTokenManager.generate(createdUser , 'mobileUser'); //data,role
        }

        async signUpMobileUser(mobileNumber , password){
                const saltRounds = 10;
                return bcrypt.hash(password, saltRounds)
                .then((encryptedPassword)=> {
                        const mobileUser = new MobileUser(mobileNumber ,encryptedPassword);
                        return this.mobileUserRepository.addPasswordtoCurrentMobileUser(mobileUser)
                    },
                (error)=> {
                  console.log(error)
                  return error;
                }); 
        }

}