const AccessTokenManager = require('../../application/security/AccessTokenManager')
require('dotenv/config')
const jwt = require('jsonwebtoken')

module.exports = class extends AccessTokenManager {

    static generate(mobileUser,role){
        return jwt.sign({mobileUser,role} , process.env.LOCAL_JWT_PRRIVATE_KEY);

    }

    static decode(token , JWT_PRIVATE_KEY){
        const decoded = jwt.verify(token , JWT_PRIVATE_KEY)
        return decoded;
    }
}