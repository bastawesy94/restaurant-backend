const jwt = require('jsonwebtoken')
const AccessTokenManager = require('../../infrastructure/security/AccessTokenManger')
const Response = require('../../interfaces/serializers/ResponseFormate')
require('dotenv/config')

module.exports = (req , res ,next)=>{
    try{
        const token = req.header('mobile-user-token')
        if(!token)
             return res.status(401).json(Response.format(401,'Access denied , token not found !'))
        req.mobileUser = AccessTokenManager.decode(token,process.env.DEV_JWT_PRRIVATE_KEY)
        next();
    }
    catch(error){
        console.log(error)
        return res.status(400).json(Response.format(400,'Bad reqquest , token error!'))

    }
        

}