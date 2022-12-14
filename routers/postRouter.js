const Router = require("express") 
const router = new Router() 
const controller = require('../controllers/postController')
const postMiddleware = require('../middlewares/postMiddleware')


router.post('/create',controller.create)
router.get('/create',postMiddleware,(req,res)=>{return  res.render('create_post.ejs')})
router.get('/all',(req,res)=>{return  res.render('all_posts.ejs')})

module.exports = router 