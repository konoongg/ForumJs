const Router = require("express") 
const router = new Router() 
const controller = require('../controllers/authController')
const {check} = require('express-validator')

router.post('/reg',[
    check('login', 'not null').notEmpty(),
    check('password', '4-10').isLength({min:4, max:10})

],controller.reg)
router.post('/log',controller.log)
router.get('/reg',(req,res)=>{return  res.render('reg.ejs')})
router.get('/log',(req,res)=>{return  res.render('log.ejs')})

module.exports = router 