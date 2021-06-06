const AccessTokenManager = require('../../application/security/AccessTokenManager')
require('dotenv/config')
const jwt = require('jsonwebtoken')

module.exports = class extends AccessTokenManager {

    static generate(mobileUserId,role){
        return jwt.sign({mobileUserId,role} , process.env.DEV_JWT_PRRIVATE_KEY);

    }

    static decode(token , JWT_PRIVATE_KEY){
        const decoded = jwt.verify(token , JWT_PRIVATE_KEY)
        return decoded;
    }
}