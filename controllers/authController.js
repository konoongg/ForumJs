const User = require('../models/users')
const Role = require('../models/roles')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require('../config')

const generateAccessToken = (id,roles)=>{
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload,secret,{expiresIn:'24h'})

}
class authController{
    async reg(req,res){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"неверные параметры "})
            }
            const {login,password,mail} = req.body
            const condidat = await User.findOne({login})
            if (condidat){
                return res.status(400).json({message:"логин занят"})
            }
            const hashpas = bcrypt.hashSync(password, 7)
            const urole = await Role.findOne({value:"user"})
            const user = new User({login,mail,password:hashpas,roles:[urole.value]})
            await user.save()
            return res.json({message: "reg"})
        }
        catch(e){
            console.log(e)
            res.status(400).json({message:"ошибка регистрации"})

        }

    }
    async log(req,res){
        try{
            const {login,password} = req.body
            const user = await  User.findOne({login})
            if (!user){
                return res.status(400).json({message:'неверное имя'})
            }
            const validpassword = bcrypt.compareSync(password, user.password)
            if (!validpassword){
                return res.status(400).json({message:'неверный пароль'})
            }
            const token = generateAccessToken(user._id,user.roles)
            res.cookie('token', token);
            return res.json({token,message:"log"})
        }
        catch(e){
            console.log(e)
            res.status(400).json({message:"ошибка входа"})

        }

    }
}

module.exports = new  authController()