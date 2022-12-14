const express = require ("express")
const mongoose = require ("mongoose")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const authRouter = require ( './routers/authRouter')
const postRouter = require ( './routers/postRouter')
const PORT = process.env.PORT || 5000
const app = express()



app.set("view engine", "ejs")
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser("123npm"));
app.use(expressSession({
	secret: '123npm',
}));
app.use('*/static',express.static(__dirname + "/static"))
app.use('/auth',authRouter)
app.use('/posts',postRouter)


app.get('/',async (req,res)=>{
    return res.render('main.ejs')

})
app.use( (req,res)=>{
    res.status('404').send('not found')

})


const start = async () =>{
    try{
        await mongoose.connect("mongodb+srv://konoongg:konoongg@cluster0.9qizjc6.mongodb.net/forum?retryWrites=true&w=majority")
        app.listen(PORT,()=>{
            console.log(" SERVER WORKING ON PORT",PORT)
        })
    }
    catch(e){
        console.log(e)
    }
}

start()
