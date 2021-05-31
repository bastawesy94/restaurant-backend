const bcrypt = require('bcrypt')
const Encryption = require('../../application/security/Encryption')

module.exports = class extends Encryption{
    
    static async encryptPassword(password) {
        // const salt = await bcrypt.genSalt(10);
        // console.log("salt : " + salt);
        // const encrypted =  await bcrypt.hash(password , salt);
        // return encrypted;
        // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
            // Store hash in your password DB.
        // });
    }

    static async isValidPassword(requestedPassword , encryptPassword) {
        return await bcrypt.compare(requestedPassword , encryptPassword);
    }
}