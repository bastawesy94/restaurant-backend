const jwt = require('jsonwebtoken')
const Response = require('../../infrastructure/helper-tools/ResponseFormate')
require('dotenv/config')

module.exports = (req , res ,next)=>{
    try{
        const token = req.header('mobile-user-token')
    if(!token)
        return res.status(401).json(Response.format(401,'Access denied , token not found !'))
    const decoded = jwt.verify(token , process.env.DEV_JWT_PRRIVATE_KEY)
    req.mobileUser = decoded;
    next();
    }
    catch(error){
        console.log(error)
        return res.status(400).json(Response.format(400,'Bad reqquest , token error!'))

    }
        

}