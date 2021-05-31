const AccessTokenManager = require('../../application/security/AccessTokenManager')
require('dotenv/config')
const jwt = require('jsonwebtoken')

module.exports = class extends AccessTokenManager {

    static generate(mobileUserId,role){
        return jwt.sign({mobileUserId,role} , process.env.DEV_JWT_PRRIVATE_KEY);

    }
}