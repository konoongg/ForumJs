const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const users = require('../models/users')
module.exports = function(req,res,next){
    try{
        
        const token = req.cookies.token
        if(itoken){
            return res.status(400).json({message:'пользователь не авторизован'})

        }
        const decode = jwt.verify(token,secret)
        req.user = decode
        next()

    }
    catch(e){
        return res.status(400).json({message:'пользователь не авторизован'})
    }

}