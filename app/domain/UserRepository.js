const models = require('../infrastructure/db/models/index') //better to use DI.

module.exports = class{
    getUser(){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    removeUser(userId){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    find(){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    updateUser(userId){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
    createUser(user){
        throw new Error('ERROR_METHOD_NOT_EMPLEMENTED')
    }
}