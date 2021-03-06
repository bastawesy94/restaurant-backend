const AccessTokenManager = require('../../infrastructure/security/AccessTokenManger')
const bcrypt = require('bcrypt')
const MobileUser = require('../../domain/mobile-user/MobileUser');
const validateEmail = require('../utilities/validateEmail')
module.exports = class {
        constructor({mobileUserRepository}){
                this.mobileUserRepository = mobileUserRepository
              
        }
        async listMobileUsers(){
                return await this.mobileUserRepository.getAllMobileUsers()
        }
        //auth is done
        async mobieleUserAuth(password , userName){
                const user = await this.mobileUserRepository.findMobileUserByUserName(userName);
                if(!user) throw Error('User is not found .')
                        const result = await bcrypt.compare(password ,user.password )
                if(result)
                        return AccessTokenManager.generate(user.id , 'mobileUser'); //data,role
        }

        //signup is done
        async signUpMobileUser(userName , mobileNumber , email, password ){
                const saltRounds = 10;
                if(!validateEmail(email)) throw Error('Email is Invalid , try again.')
                return bcrypt.hash(password, saltRounds)
                .then((encryptedPassword)=> {
                        const mobileUser = new MobileUser(userName , mobileNumber , email, encryptedPassword );
                        return this.mobileUserRepository.createMobileUser(mobileUser)
                    },
                (error)=> {
                  console.log(error)
                  return error;
                }); 
        }

}