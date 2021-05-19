const UserRepository = require('../../infrastructure/repositories/UserReposetoryMySQL') 

module.exports = ()=>{
        return  UserRepository.find()
}