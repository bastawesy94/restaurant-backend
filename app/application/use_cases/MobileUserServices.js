const AccessTokenManager = require('../../infrastructure/security/AccessTokenManger')
const bcrypt = require('bcrypt')
const IntialMobileUser = require('../../domain/IntialMobileUser');
const MobileUser = require('../../domain/MobileUser');

module.exports = class {
        constructor({mobileUserRepository}){
                this.mobileUserRepository = mobileUserRepository
                this.listMobileUsers = this.listMobileUsers.bind(this)
                this.mobileUserIdVerified =  this.mobileUserIdVerified.bind(this)
                this.mobieleUserAuth = this.mobieleUserAuth.bind(this)
                this.saveMobileUserNumber = this.saveMobileUserNumber.bind(this)
                this.signUpMobileUser = this.signUpMobileUser.bind(this)
        }
        async listMobileUsers(){
                return await this.mobileUserRepository.getAllMobileUsers()
        }

        mobileUserIdVerified (verificationCode){
                if(true)
                    return true;
                return false;    
        }

        async mobieleUserAuth(password , mobileNumber){
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
                        return error;
                    });
        }
}