const bcrypt = require('bcrypt')
const Encryption = require('../../application/security/Encryption')

module.exports = class extends Encryption{
     
    static async encryptPassword(password) {
        const salt = await bcrypt.genSalt(10);
        console.log("salt : " + salt);
        const encrypted =  await bcrypt.hash(password , salt);
        console.log("encrypted result : " + encrypted)
        return encrypted;
    }

    static async isValidPassword(requestedPassword , encryptPassword) {
        return await bcrypt.compare(requestedPassword , encryptPassword);
    }
}