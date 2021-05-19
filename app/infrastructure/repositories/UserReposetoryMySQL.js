const db = require('../db/models/index')
const UserRepo = require('../../domain/UserRepository')
const User = require('../../domain/User')

module.exports = class extends UserRepo{
   
    static find(){
        return db.userModel.findAll()
    }
}